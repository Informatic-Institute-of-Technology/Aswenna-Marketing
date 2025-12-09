import cors from 'cors';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

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

app.listen(PORT, () => {
    console.log(`🚀 Testimonials API server running on http://localhost:${PORT}`);
    console.log(`📝 Testimonials file: ${testimonialsPath}`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  POST http://localhost:${PORT}/api/testimonials - Add new testimonial`);
    console.log(`  GET  http://localhost:${PORT}/api/testimonials - Get all testimonials`);
});
