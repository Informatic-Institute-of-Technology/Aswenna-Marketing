import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
import { sendWelcomeEmail } from './server/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const testimonialsPath = path.join(__dirname, 'src', 'data', 'testimonials.json');

app.post('/api/testimonials', async (req, res) => {
    try {
        const newTestimonial = req.body;
        
        const data = await fs.readFile(testimonialsPath, 'utf8');
        const testimonials = JSON.parse(data);
        
        testimonials.push(newTestimonial);
        
        await fs.writeFile(
            testimonialsPath,
            JSON.stringify(testimonials, null, 2),
            'utf8'
        );
        
        console.log('✅ New testimonial added:', newTestimonial.name);
        res.status(201).json({ 
            success: true, 
            message: 'Testimonial added successfully',
            id: newTestimonial.id
        });
    } catch (error) {
        console.error('❌ Error adding testimonial:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to add testimonial',
            error: error.message
        });
    }
});

app.get('/api/testimonials', async (req, res) => {
    try {
        const data = await fs.readFile(testimonialsPath, 'utf8');
        const testimonials = JSON.parse(data);
        res.json(testimonials);
    } catch (error) {
        console.error('❌ Error reading testimonials:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to read testimonials',
            error: error.message
        });
    }
});

// Send welcome email endpoint
app.post('/api/send-welcome-email', async (req, res) => {
    try {
        console.log('📧 Received email request:', req.body);
        const { email, language = 'en' } = req.body;
        
        if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            console.log('❌ Invalid email format:', email);
            return res.status(400).json({
                success: false,
                message: 'Valid email address is required'
            });
        }
        
        console.log(`🔄 Attempting to send email to: ${email}`);
        const result = await sendWelcomeEmail(email, language);
        
        if (result.success) {
            console.log(`✅ Welcome email sent to: ${email}`);
            res.status(200).json(result);
        } else {
            console.error(`❌ Failed to send email to: ${email}`, result.error);
            res.status(500).json(result);
        }
    } catch (error) {
        console.error('❌ Error in email endpoint:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Testimonials & Email API server running on http://localhost:${PORT}`);
    console.log(`📝 Testimonials file: ${testimonialsPath}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER || 'Not configured'}`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  POST http://localhost:${PORT}/api/testimonials - Add new testimonial`);
    console.log(`  GET  http://localhost:${PORT}/api/testimonials - Get all testimonials`);
    console.log(`  POST http://localhost:${PORT}/api/send-welcome-email - Send welcome email`);
});
