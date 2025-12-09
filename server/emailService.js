import nodemailer from 'nodemailer';
import process from 'process';

const EMAIL_CONFIG = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER || 'aswenna.agrilink@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'aswenna@2025'
    },
    tls: {
        rejectUnauthorized: false
    }
};

const createTransporter = () => {
    return nodemailer.createTransport(EMAIL_CONFIG);
};

const getWelcomeEmailTemplate = (recipientEmail, language = 'en') => {
    const templates = {
        en: {
            subject: '🌱 Welcome to Aswenna - Your Agricultural Revolution Starts Here',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                            line-height: 1.7; 
                            color: #e8f5e3;
                            background: #0a1a0a;
                            padding: 20px;
                        }
                        .container { 
                            max-width: 650px; 
                            margin: 0 auto; 
                            background: #0d1f0d;
                            border-radius: 16px;
                            overflow: hidden;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
                            border: 1px solid #1a3a1a;
                        }
                        .header { 
                            background: linear-gradient(135deg, #1a3a1a 0%, #234d23 100%);
                            padding: 50px 30px;
                            text-align: center;
                            border-bottom: 3px solid #0d3a1d;
                        }
                        .logo { 
                            background: #0d3a1d;
                            width: 70px;
                            height: 70px;
                            border-radius: 50%;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 36px;
                            margin-bottom: 20px;
                            box-shadow: 0 0 30px rgba(124, 252, 0, 0.5);
                        }
                        .header h1 { 
                            color: #0d3a1d; 
                            margin: 0 0 10px 0; 
                            font-size: 36px;
                            font-weight: bold;
                            text-shadow: 0 0 20px rgba(124, 252, 0, 0.5);
                        }
                        .header p { 
                            color: #9dd68d; 
                            font-size: 18px; 
                            margin: 0;
                            font-weight: 500;
                        }
                        .content { 
                            padding: 45px 35px;
                            background: #0f250f;
                        }
                        .greeting { 
                            font-size: 24px; 
                            color: #0d3a1d; 
                            margin-bottom: 20px;
                            font-weight: bold;
                        }
                        .intro { 
                            font-size: 16px; 
                            color: #b8d9aa; 
                            margin-bottom: 35px;
                            line-height: 1.9;
                        }
                        .feature-grid {
                            display: table;
                            width: 100%;
                            margin: 30px 0;
                        }
                        .feature { 
                            background: linear-gradient(135deg, #152d15 0%, #1f3d1f 100%);
                            border-left: 5px solid #0d3a1d;
                            padding: 25px;
                            margin: 20px 0;
                            border-radius: 10px;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
                            border: 1px solid #234d23;
                        }
                        .feature-icon {
                            font-size: 40px;
                            margin-bottom: 15px;
                            display: block;
                            filter: drop-shadow(0 0 10px rgba(124, 252, 0, 0.3));
                        }
                        .feature h3 { 
                            color: #0d3a1d; 
                            margin: 0 0 12px 0;
                            font-size: 20px;
                            font-weight: bold;
                        }
                        .feature p { 
                            color: #a8cc98; 
                            margin: 0;
                            font-size: 15px;
                            line-height: 1.7;
                        }
                        .divider {
                            height: 2px;
                            background: linear-gradient(90deg, transparent, #0d3a1d, transparent);
                            margin: 35px 0;
                        }
                        .cta-section {
                            text-align: center;
                            padding: 30px;
                            background: #152d15;
                            border-radius: 12px;
                            margin: 30px 0;
                            border: 1px solid #234d23;
                        }
                        .cta-button { 
                            display: inline-block; 
                            padding: 18px 45px; 
                            background: linear-gradient(135deg, #0d3a1d 0%, #6EE600 100%);
                            color: #0a1a0a; 
                            text-decoration: none; 
                            border-radius: 50px; 
                            font-weight: bold;
                            font-size: 18px;
                            box-shadow: 0 8px 20px rgba(124, 252, 0, 0.5);
                        }
                        .benefits {
                            background: #152d15;
                            padding: 25px;
                            border-radius: 10px;
                            margin: 25px 0;
                            border: 1px solid #234d23;
                        }
                        .benefits h3 {
                            color: #0d3a1d;
                            font-size: 22px;
                            margin-bottom: 18px;
                        }
                        .benefits ul {
                            list-style: none;
                            padding: 0;
                        }
                        .benefits li {
                            padding: 12px 0;
                            padding-left: 30px;
                            color: #a8cc98;
                            position: relative;
                            font-size: 15px;
                        }
                        .benefits li:before {
                            content: "✓";
                            position: absolute;
                            left: 0;
                            color: #0d3a1d;
                            font-weight: bold;
                            font-size: 18px;
                        }
                        .stats {
                            display: table;
                            width: 100%;
                            margin: 30px 0;
                            background: #152d15;
                            padding: 20px;
                            border-radius: 10px;
                            border: 1px solid #234d23;
                        }
                        .stat-item {
                            display: table-cell;
                            width: 33.33%;
                            text-align: center;
                            padding: 20px 10px;
                        }
                        .stat-number {
                            font-size: 32px;
                            font-weight: bold;
                            color: #0d3a1d;
                            display: block;
                        }
                        .stat-label {
                            font-size: 14px;
                            color: #9dd68d;
                            margin-top: 8px;
                        }
                        .footer { 
                            background: #0a1a0a;
                            color: #7a9470; 
                            padding: 35px 30px;
                            text-align: center;
                            border-top: 3px solid #1a3a1a;
                        }
                        .footer-logo {
                            color: #0d3a1d;
                            font-size: 24px;
                            font-weight: bold;
                            margin-bottom: 15px;
                        }
                        .footer p {
                            margin: 10px 0;
                            font-size: 14px;
                            line-height: 1.6;
                        }
                        .social-links {
                            margin: 20px 0;
                        }
                        .social-links a {
                            color: #0d3a1d;
                            text-decoration: none;
                            margin: 0 10px;
                            font-size: 14px;
                        }
                        .footer-note {
                            font-size: 12px;
                            color: #5a6d54;
                            margin-top: 25px;
                            padding-top: 20px;
                            border-top: 1px solid #1a3a1a;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="logo">🌾</div>
                            <h1>Welcome to Aswenna</h1>
                            <p>Sri Lanka's Premier Agricultural Innovation Platform</p>
                        </div>
                        
                        <div class="content">
                            <div class="greeting">Hello, Future Agricultural Leader!</div>
                            <p class="intro">
                                Thank you for joining <strong>Aswenna</strong> - where technology meets tradition to revolutionize Sri Lankan agriculture. 
                                We're thrilled to have you as part of our growing community of progressive farmers, landowners, and agricultural investors 
                                who are shaping the future of sustainable farming in Sri Lanka.
                            </p>

                            <div class="stats">
                                <div class="stat-item">
                                    <span class="stat-number">1000+</span>
                                    <span class="stat-label">Active Farmers</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">500+</span>
                                    <span class="stat-label">Land Partnerships</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">₨50M+</span>
                                    <span class="stat-label">Investments Secured</span>
                                </div>
                            </div>

                            <div class="divider"></div>
                            
                            <div class="feature-grid">
                                <div class="feature">
                                    <span class="feature-icon">🚜</span>
                                    <h3>Smart Farming Solutions</h3>
                                    <p>
                                        Leverage cutting-edge AI-powered analytics to optimize crop selection, monitor soil health, 
                                        predict weather patterns, and maximize your yield. Our platform provides real-time insights 
                                        tailored to Sri Lankan agricultural conditions, helping you make data-driven decisions that 
                                        boost productivity and profitability.
                                    </p>
                                </div>
                                
                                <div class="feature">
                                    <span class="feature-icon">🤝</span>
                                    <h3>Connect & Collaborate</h3>
                                    <p>
                                        Build meaningful partnerships within our thriving agricultural ecosystem. Connect with verified 
                                        landowners seeking farming collaborations, find experienced farming partners, engage with agricultural 
                                        investors, and network with agri-business experts. Our matchmaking system ensures you find the perfect 
                                        partners for your agricultural ventures.
                                    </p>
                                </div>
                                
                                <div class="feature">
                                    <span class="feature-icon">💰</span>
                                    <h3>Investment & Funding</h3>
                                    <p>
                                        Access diverse funding opportunities to scale your agricultural projects. Present your farming initiatives 
                                        to potential investors, track funding progress with transparent dashboards, secure micro-loans designed 
                                        for farmers, and participate in government-backed agricultural schemes. We're bridging the gap between 
                                        agricultural innovation and capital.
                                    </p>
                                </div>

                                <div class="feature">
                                    <span class="feature-icon">📊</span>
                                    <h3>Market Intelligence</h3>
                                    <p>
                                        Stay ahead with real-time market prices, demand forecasts, and export opportunities. Our platform 
                                        aggregates market data from across Sri Lanka, helping you time your harvests perfectly and connect 
                                        directly with buyers, eliminating middlemen and maximizing your profits.
                                    </p>
                                </div>
                            </div>

                            <div class="divider"></div>

                            <div class="benefits">
                                <h3>🌟 Your Exclusive Member Benefits</h3>
                                <ul>
                                    <li>Priority notification when our full platform launches</li>
                                    <li>Early access to all premium features and tools</li>
                                    <li>Free consultation with our agricultural experts</li>
                                    <li>Weekly tips on sustainable and profitable farming practices</li>
                                    <li>Invitations to exclusive webinars and networking events</li>
                                    <li>Access to our comprehensive knowledge base and tutorials</li>
                                    <li>Special discounts on partner products and services</li>
                                </ul>
                            </div>

                            <div class="cta-section">
                                <p style="color: #c5e8b7; font-size: 18px; margin-bottom: 20px;">
                                    <strong>Ready to revolutionize your farming journey?</strong>
                                </p>
                                <a href="https://aswenna.lk" class="cta-button">Explore Aswenna Platform →</a>
                            </div>
                            
                            <p style="margin-top: 35px; color: #c5e8b7; font-size: 15px; text-align: center;">
                                <em>Together, we're cultivating a greener, more prosperous Sri Lanka. Welcome aboard! 🌱</em>
                            </p>
                        </div>
                        
                        <div class="footer">
                            <div class="footer-logo">Aswenna</div>
                            <p><strong>Cultivating a Sustainable Future with Sri Lankan Agriculture</strong></p>
                            <p>Empowering farmers, connecting communities, and transforming agriculture through technology.</p>
                            
                            <div class="social-links">
                                <a href="#">Facebook</a> | 
                                <a href="#">Instagram</a> | 
                                <a href="#">LinkedIn</a> | 
                                <a href="#">Twitter</a>
                            </div>
                            
                            <div class="footer-note">
                                © 2025 Aswenna Agricultural Platform. All rights reserved.<br>
                                This email was sent to ${recipientEmail}<br>
                                <a href="#" style="color: #0d3a1d;">Unsubscribe</a> | <a href="#" style="color: #0d3a1d;">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `
        },
        si: {
            subject: '🌱 Aswenna වෙත සාදරයෙන් පිළිගනිමු - ඔබේ ගොවිතැන් ගමන පරිවර්තනය කරන්න!',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: 'Noto Serif Sinhala', 'Arial', sans-serif; line-height: 1.8; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
                        .header { background: linear-gradient(135deg, #0d3a1d, #6EE600); padding: 40px 20px; text-align: center; }
                        .header h1 { color: #000; margin: 0; font-size: 32px; }
                        .content { padding: 40px 30px; }
                        .feature { margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; }
                        .feature h3 { color: #0d3a1d; margin-top: 0; }
                        .cta-button { display: inline-block; padding: 15px 30px; background: #0d3a1d; color: #000; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                        .footer { background: #2E3829; color: #b8c7b8; padding: 30px; text-align: center; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🌾 Aswenna වෙත සාදරයෙන් පිළිගනිමු!</h1>
                            <p style="color: #000; font-size: 18px;">ඔබේ ගොවිතැන් ගමන ඔන්ලයින් පරිවර්තනය කරන්න</p>
                        </div>
                        
                        <div class="content">
                            <h2>අනාගත ගොවියා වෙත! 👋</h2>
                            <p>Aswenna - ශ්‍රී ලංකාවේ විප්ලවීය කෘෂිකාර්මික වේදිකාව හා එක්වීම ගැන ස්තූතියි! ඔබේ ගොවිතැන් ගමන පරිවර්තනය කිරීමට අපට උත්සාහ දක්වන්නට සතුටුයි.</p>
                            
                            <div class="feature">
                                <h3>🚜 බුද්ධිමත් ගොවිතැන් මෙවලම්</h3>
                                <p>ඔබේ බෝග අස්වැන්න සහ ගොවිතැන් පිළිවෙත් ප්‍රශස්තකරණය කිරීමට AI බලගැන්වූ අවබෝධයන් ලබා ගන්න.</p>
                            </div>
                            
                            <div class="feature">
                                <h3>🤝 හවුල්කරුවන් සමඟ සම්බන්ධ වන්න</h3>
                                <p>ඉඩම් හිමියන්, ආයෝජකයින් සොයා ගන්න සහ ඔබේ ප්‍රදේශයේ සෙසු ගොවීන් සමඟ සහයෝගයෙන් කටයුතු කරන්න.</p>
                            </div>
                            
                            <div class="feature">
                                <h3>💰 ආයෝජන අවස්ථා</h3>
                                <p>ඔබේ කෘෂිකාර්මික ව්‍යාපෘති සඳහා අරමුදල් ලබා ගන්න සහ ඔබේ ආයෝජන නිරීක්ෂණය කරන්න.</p>
                            </div>
                            
                            <div style="text-align: center;">
                                <a href="https://aswenna.lk" class="cta-button">දැන් ආරම්භ කරන්න</a>
                            </div>
                            
                            <p style="margin-top: 30px;"><strong>මීළඟට කුමක්ද?</strong></p>
                            <ul>
                                <li>වේදිකාව දියත් වන විට අපි ඔබට දන්වන්නෙමු</li>
                                <li>ඔබට අපගේ විශේෂාංග සඳහා මුල් ප්‍රවේශය ලැබෙනු ඇත</li>
                                <li>තිරසාර ගොවිතැන් සඳහා විශේෂ උපදෙස්</li>
                            </ul>
                            
                            <p>තවත් යාවත්කාලීන කිරීම් සඳහා සම්බන්ධව සිටින්න!</p>
                        </div>
                        
                        <div class="footer">
                            <p><strong>Aswenna</strong></p>
                            <p>ශ්‍රී ලංකා කෘෂිකර්මාන්තය සමඟ තිරසාර අනාගතයක් වගා කිරීම</p>
                            <p style="font-size: 12px; margin-top: 20px;">
                                © 2025 Aswenna. සියලුම හිමිකම් ඇවිරිණි.<br>
                                මෙම විද්‍යුත් තැපෑල ${recipientEmail} වෙත යවන ලදී
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `
        }
    };
    
    return templates[language] || templates.en;
};

const sendWelcomeEmail = async (recipientEmail, language = 'en') => {
    try {
        const transporter = createTransporter();
        
        // Verify connection first
        await transporter.verify();
        console.log('✅ SMTP connection verified successfully');
        
        const template = getWelcomeEmailTemplate(recipientEmail, language);
        
        const mailOptions = {
            from: `"Aswenna" <${EMAIL_CONFIG.auth.user}>`,
            to: recipientEmail,
            subject: template.subject,
            html: template.html
        };
        
        const info = await transporter.sendMail(mailOptions);
        
        return {
            success: true,
            messageId: info.messageId,
            message: 'Welcome email sent successfully!'
        };
    } catch (error) {
        console.error('❌ Email service error:', error.message);
        
        // Provide specific error messages
        if (error.code === 'EAUTH') {
            return {
                success: false,
                error: 'Gmail authentication failed. Please enable "Less secure app access" at https://myaccount.google.com/lesssecureapps OR use an App Password.'
            };
        }
        
        return {
            success: false,
            error: error.message
        };
    }
};

export {
    createTransporter, sendWelcomeEmail
};

