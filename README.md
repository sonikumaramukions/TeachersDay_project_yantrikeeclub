# 🧠 Intelligent Teachers' Day Website - Yantrikee Club

An ultra-modern, interactive Teachers' Day website with puzzle challenges and automated email greetings for ICFAI Tech faculty.

## ✨ Features

### 🎯 **Intelligent Puzzle System**
- **Engineering Riddle**: "I am the foundation of all digital logic, the building block of computation. I can be either 0 or 1, but together we create infinite possibilities. What am I?"
- **Answer**: "bit" (the smallest unit of information)
- **Hint Button**: Faculty can request hints when needed
- **Success Animation**: Special celebration when puzzle is solved

### 📧 **Automated Email System**
- **Personalized Greetings**: Custom HTML emails with faculty names
- **Intelligence Verification**: Special badge for puzzle solvers
- **Beautiful Design**: Cyber engineering themed email template
- **Email Logging**: Track all attempts and successful sends

### 🌟 **Ultra-Modern Design**
- **Cyber Engineering Theme**: Dark background with neon colors
- **Floating Elements**: Circuit boards, microchips, gear systems
- **Advanced Animations**: Parallax effects, particle systems, confetti
- **Responsive Design**: Works on all devices

### 🎮 **Interactive Features**
- **Mouse Proximity Effects**: Elements respond to cursor distance
- **Audio Controls**: Ambient cyber sound
- **Engineering Showcase**: 6 engineering fields with animations
- **No-Scroll Design**: Everything fits in viewport

## 🚀 Quick Start

### Option 1: Static Website Only
```bash
# Navigate to project directory
cd teachers_day_yantrikee

# Start simple HTTP server
python3 -m http.server 8000

# Open in browser
# http://localhost:8000
```

### Option 2: Full Email Automation
```bash
# Install Python dependencies
pip install -r requirements.txt

# Configure email settings in app.py
# Update SENDER_EMAIL and SENDER_PASSWORD

# Start Flask server
python3 app.py

# Open in browser
# http://localhost:5000
```

## 📧 Email Configuration

### Gmail Setup
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update app.py**:
   ```python
   SENDER_EMAIL = "your-email@gmail.com"
   SENDER_PASSWORD = "your-16-digit-app-password"
   ```

### Other Email Providers
Update SMTP settings in `app.py`:
```python
SMTP_SERVER = "smtp.your-provider.com"
SMTP_PORT = 587  # or 465 for SSL
```

## 🎯 How the Puzzle Works

1. **Faculty visits website**
2. **Sees engineering riddle**
3. **Can request hint if needed**
4. **Enters answer (should be "bit")**
5. **If correct**: Shows success animation and registration form
6. **If incorrect**: Shows error feedback
7. **After registration**: Sends personalized greeting to email

## 📁 Project Structure

```
teachers_day_yantrikee/
├── index.html          # Main website
├── styles.css          # Cyber engineering styles
├── script.js           # Interactive functionality
├── app.py              # Flask backend (email automation)
├── requirements.txt    # Python dependencies
├── README.md          # This file
└── email_log.json     # Email sending logs (auto-generated)
```

## 🎨 Design Elements

### Color Palette
- **Primary**: Cyan (#00ffff), Blue (#0080ff), Purple (#8000ff)
- **Secondary**: Pink (#ff0080), Green (#00ff80), Orange (#ff8000)
- **Background**: Dark gradients with cyber grid

### Typography
- **Headers**: Orbitron (futuristic)
- **Body**: Exo 2 (modern, readable)

### Animations
- **Floating Elements**: 6 engineering-themed elements
- **Particle System**: 40+ particles with life cycles
- **Confetti**: 80+ pieces with gravity physics
- **Mouse Effects**: Proximity sensing and parallax

## 🔧 Customization

### Change Puzzle
Edit in `script.js`:
```javascript
this.correctAnswer = 'your-answer';
```

### Modify Email Template
Edit `EMAIL_TEMPLATE` in `app.py`

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --neon-cyan: #00ffff;
    --neon-blue: #0080ff;
    /* ... */
}
```

## 📊 API Endpoints

### Send Greeting
```http
POST /api/send-greeting
Content-Type: application/json

{
    "name": "Faculty Name",
    "email": "faculty@email.com"
}
```

### Get Statistics
```http
GET /api/puzzle-stats
```

### Health Check
```http
GET /api/health
```

## 🎯 Puzzle Answer

The answer is **"bit"** - the smallest unit of information in computing, representing 0 or 1.

## 🌟 Special Features

### Hint System
- **Hidden by default**: Faculty must click to reveal
- **Toggle functionality**: Can show/hide hint
- **Visual feedback**: Button changes color and text

### Email Automation
- **HTML Templates**: Beautiful cyber-themed emails
- **Personalization**: Faculty names and intelligence badges
- **Error Handling**: Graceful failure handling
- **Logging**: Track all email attempts

### Performance Optimizations
- **Reduced confetti**: Only on special occasions
- **Efficient animations**: RequestAnimationFrame usage
- **Lazy loading**: Elements animate when visible
- **Mobile optimized**: Touch-friendly interactions

## 🚀 Deployment

### Static Hosting (Netlify/Vercel)
Upload `index.html`, `styles.css`, and `script.js`

### Full Stack (Heroku/Railway)
1. Upload all files
2. Set environment variables for email
3. Install dependencies from `requirements.txt`

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## 🎉 Success Metrics

Track puzzle completion and email engagement:
- Total puzzle attempts
- Successful solves
- Emails sent
- Faculty engagement

## 🔒 Security Notes

- Email credentials stored in environment variables
- Input validation on all forms
- CORS enabled for local development
- No sensitive data logged

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make improvements
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is created for ICFAI Tech Teachers' Day 2024.

---

**Happy Teachers' Day 2024! 🎉**

*Empowering minds, Engineering futures*  
*Yantrikee Technical Club • ICFAI Tech*
