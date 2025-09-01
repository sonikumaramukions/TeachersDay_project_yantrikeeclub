from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)

# Email Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "your-email@gmail.com"  # Replace with your email
SENDER_PASSWORD = "your-app-password"  # Replace with your app password

# HTML Email Template for 2025
EMAIL_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Teachers' Day 2025</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
            color: #ffffff;
            margin: 0;
            padding: 0;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(45deg, #00ffff, #0080ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #00ffff;
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        .greeting-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 255, 255, 0.2);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
        }
        .greeting-title {
            font-size: 2.5rem;
            text-align: center;
            background: linear-gradient(45deg, #00ffff, #8000ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 30px;
        }
        .greeting-message {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.9);
        }
        .personalized-greeting {
            background: linear-gradient(45deg, #8000ff, #ff0080);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 30px;
        }
        .faculty-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 10px;
        }
        .intelligence-badge {
            display: inline-block;
            background: linear-gradient(45deg, #00ff80, #00ffff);
            color: #000;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .signature {
            text-align: right;
            margin-top: 40px;
        }
        .signature-line {
            font-style: italic;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 10px;
        }
        .club-signature {
            font-weight: bold;
            color: #00ffff;
            font-size: 1.3rem;
            margin-bottom: 5px;
        }
        .institute-signature {
            color: #0080ff;
            font-weight: 600;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(0, 255, 255, 0.2);
        }
        .footer-message {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
        }
        .engineering-fields {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 30px 0;
        }
        .field-item {
            background: rgba(0, 255, 255, 0.1);
            border: 1px solid rgba(0, 255, 255, 0.3);
            border-radius: 10px;
            padding: 15px;
            text-align: center;
        }
        .field-icon {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }
        .field-name {
            font-weight: bold;
            color: #00ffff;
        }
        .field-desc {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        }
        .year-badge {
            background: linear-gradient(45deg, #ff0080, #ff8000);
            color: #fff;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
            margin-bottom: 15px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🧠 Yantrikee</div>
            <div class="subtitle">Official Technical Club • ICFAI Tech</div>
        </div>
        
        <div class="greeting-card">
            <div class="greeting-title">Happy Teachers' Day 2025</div>
            
            <div class="personalized-greeting">
                <div class="year-badge">2025-2026 Academic Year</div>
                <div class="intelligence-badge">🎯 Multi-Branch Intelligence Verified</div>
                <div class="faculty-name">Dear {faculty_name}</div>
                <p>Congratulations! You have successfully demonstrated exceptional knowledge across all engineering disciplines!</p>
            </div>
            
            <div class="greeting-message">
                <p>On this auspicious occasion of Teachers' Day 2025, we, the members of Yantrikee Club (Official Technical Club of ICFAI Tech), extend our heartfelt gratitude and warmest wishes to you.</p>
                
                <p>You are truly a brilliant teacher of the 2025-2026 academic year, whose dedication, expertise, and passion for teaching continue to inspire and shape the minds of future engineers and innovators.</p>
                
                <p>Your exceptional ability to impart knowledge across multiple engineering disciplines, combined with your commitment to excellence, makes you an invaluable asset to our institution and the engineering community at large.</p>
                
                <p>Thank you for being the guiding light that illuminates the path of knowledge and innovation for generations of students.</p>
            </div>
            
            <div class="engineering-fields">
                <div class="field-item">
                    <div class="field-icon">💻</div>
                    <div class="field-name">Computer Science</div>
                    <div class="field-desc">Digital Revolution</div>
                </div>
                <div class="field-item">
                    <div class="field-icon">🔌</div>
                    <div class="field-name">Electronics</div>
                    <div class="field-desc">Circuit Innovation</div>
                </div>
                <div class="field-item">
                    <div class="field-icon">⚡</div>
                    <div class="field-name">Electrical</div>
                    <div class="field-desc">Power Systems</div>
                </div>
                <div class="field-item">
                    <div class="field-icon">⚙️</div>
                    <div class="field-name">Mechanical</div>
                    <div class="field-desc">Precision Engineering</div>
                </div>
                <div class="field-item">
                    <div class="field-name">Civil</div>
                    <div class="field-desc">Infrastructure Design</div>
                </div>
                <div class="field-item">
                    <div class="field-icon">🤖</div>
                    <div class="field-name">DSAI</div>
                    <div class="field-desc">Data Science & AI</div>
                </div>
            </div>
            
            <div class="signature">
                <div class="signature-line">With deepest respect and gratitude,</div>
                <div class="club-signature">Yantrikee Club</div>
                <div class="institute-signature">Official Technical Club of ICFAI Tech</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-message">
                "Empowering minds, Engineering futures"<br>
                September 5, 2025
            </div>
        </div>
    </div>
</body>
</html>
"""

def send_email(faculty_name, faculty_email):
    """Send personalized Teachers' Day greeting email"""
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = SENDER_EMAIL
        msg['To'] = faculty_email
        msg['Subject'] = f"🎉 Happy Teachers' Day 2025 - {faculty_name}"

        # Create HTML content
        html_content = EMAIL_TEMPLATE.format(faculty_name=faculty_name)
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)

        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, faculty_email, text)
        server.quit()
        
        return True, "Email sent successfully!"
        
    except Exception as e:
        return False, f"Failed to send email: {str(e)}"

@app.route('/')
def index():
    """Serve the main website"""
    return render_template('index.html')

@app.route('/api/send-greeting', methods=['POST'])
def send_greeting():
    """API endpoint to send personalized greeting email"""
    try:
        data = request.get_json()
        faculty_name = data.get('name', '').strip()
        faculty_email = data.get('email', '').strip()
        
        # Validate input
        if not faculty_name or not faculty_email:
            return jsonify({
                'success': False,
                'message': 'Name and email are required'
            }), 400
        
        # Send email
        success, message = send_email(faculty_name, faculty_email)
        
        # Log the attempt
        log_data = {
            'timestamp': datetime.now().isoformat(),
            'faculty_name': faculty_name,
            'faculty_email': faculty_email,
            'success': success,
            'message': message
        }
        
        with open('email_log.json', 'a') as f:
            f.write(json.dumps(log_data) + '\n')
        
        return jsonify({
            'success': success,
            'message': message
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Server error: {str(e)}'
        }), 500

@app.route('/api/puzzle-stats', methods=['GET'])
def get_puzzle_stats():
    """Get puzzle completion statistics"""
    try:
        stats = {
            'total_attempts': 0,
            'successful_solves': 0,
            'emails_sent': 0,
            'last_activity': None
        }
        
        if os.path.exists('email_log.json'):
            with open('email_log.json', 'r') as f:
                lines = f.readlines()
                stats['total_attempts'] = len(lines)
                stats['successful_solves'] = len([line for line in lines if json.loads(line)['success']])
                stats['emails_sent'] = stats['successful_solves']
                
                if lines:
                    last_entry = json.loads(lines[-1])
                    stats['last_activity'] = last_entry['timestamp']
        
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error getting stats: {str(e)}'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'service': 'Teachers Day Email Service 2025'
    })

if __name__ == '__main__':
    print("🚀 Starting Teachers' Day Email Service 2025...")
    print("📧 Email Configuration:")
    print(f"   SMTP Server: {SMTP_SERVER}")
    print(f"   Sender Email: {SENDER_EMAIL}")
    print("⚠️  Please update SENDER_EMAIL and SENDER_PASSWORD in app.py")
    print("🌐 Server running on http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
