# URL Shortener API using NestJS

## Overview
This application is a URL shortener service built using NestJS framework. It allows users to convert long URLs into shorter, more manageable URLs that redirect to the original destination.

## Tech Stack
- NestJS (v11.0)
- MySQL
- TypeORM
- TypeScript

## MySQL Setup

### Prerequisites
1. MySQL Server (v8.0 or higher)
2. MySQL Workbench (optional, for GUI management)

### Database Setup Steps
1. Install MySQL:
```bash
# For MacOS using Homebrew
brew install mysql

# For Ubuntu/Debian
sudo apt install mysql-server

# For Windows
# Download and install from https://dev.mysql.com/downloads/installer/
```

2. Start MySQL Service:
```bash
# MacOS
brew services start mysql

# Ubuntu/Debian
sudo systemctl start mysql

# Windows
# MySQL service starts automatically after installation
```

3. Create Database and User:
```sql
# Login to MySQL as root
mysql -u root -p

# Create database
CREATE DATABASE nest_url_shortener;

# Create user (optional)
CREATE USER 'urlshortener'@'localhost' IDENTIFIED BY 'your_strong_password';

# Grant privileges
GRANT ALL PRIVILEGES ON nest_url_shortener.* TO 'urlshortener'@'localhost';
FLUSH PRIVILEGES;
```

4. Update Database Configuration:
Edit `database.module.ts` with your credentials:
```typescript
{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'your_username', // default: root
    password: 'your_password',
    database: 'nest_url_shortener',
    autoLoadEntities: true,
    synchronize: true,
}
```

### Verify Installation
```bash
# Connect to database
mysql -u your_username -p nest_url_shortener

# Check connection
mysql> SHOW TABLES;
```

### Troubleshooting
1. Connection Issues:
   - Verify MySQL service is running
   - Check credentials in database.module.ts
   - Ensure database exists
   
2. Permission Issues:
   - Verify user privileges
   - Check MySQL user host restrictions

## Features
- URL shortening
- Redirect service
- Automatic timestamp tracking
- Unique URL validation

## How It Works

### URL Shortening Process
1. User submits a long URL through POST `/url/shorten`
2. System generates a unique short ID using `shortid` library
3. Both URLs are stored in MySQL database
4. Short URL is returned to user

### URL Redirection Process
1. User accesses short URL through GET `/url/:shortUrl`
2. System looks up original URL in database
3. User is redirected to original URL
4. 404 error if short URL not found

## API Endpoints

### 1. Create Short URL
- **Endpoint:** POST `/url/shorten`
- **Body:** 
```json
{
    "originalUrl": "https://your-long-url.com/very/long/path"
}
```
- **Response:**
```json
{
    "id": 1,
    "originalUrl": "https://your-long-url.com/very/long/path",
    "shortUrl": "abc123",
    "createdAt": "2024-03-04T10:30:00Z"
}
```

### 2. Access Original URL
- **Endpoint:** GET `/url/:shortUrl`
- **Action:** Redirects to original URL

## About NestJS

NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.

### Key NestJS Concepts Used in This Project

1. **Decorators**
   - `@Controller()` - Defines routing
   - `@Injectable()` - Enables dependency injection
   - `@Entity()` - Defines database models
   - `@Column()` - Specifies database columns

2. **Modules**
   - AppModule (root)
   - DatabaseModule (database configuration)
   - Feature modules (URL handling)

3. **Dependency Injection**
   - Services are injected into controllers
   - Repository pattern for database operations

4. **TypeORM Integration**
   - Entity definitions
   - Repository pattern
   - Database migrations

### Project Structure
```
src/
├── app.module.ts          # Root module
├── database.module.ts     # Database configuration
├── url.controller.ts      # URL endpoints
├── url.service.ts         # Business logic
└── url.entity.ts         # Database model
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure database in `database.module.ts`
4. Run migrations:
```bash
npm run typeorm migration:run
```

5. Start the application:
```bash
npm run start:dev
```

## Best Practices Implemented

1. **Separation of Concerns**
   - Controllers handle HTTP requests
   - Services contain business logic
   - Entities define data structure

2. **Database Design**
   - Unique constraints
   - Timestamps for tracking
   - Proper indexing

3. **Error Handling**
   - HTTP exceptions
   - Database error handling
   - Validation pipes

## Common Use Cases

1. Social Media Sharing
   - Shorten long URLs for Twitter/social media posts

2. Analytics
   - Track URL access patterns
   - Monitor redirect performance

3. Marketing Campaigns
   - Create memorable short URLs
   - Track campaign effectiveness

## Security Considerations

1. URL Validation
2. Rate Limiting (can be implemented)
3. SQL Injection Protection (via TypeORM)
4. XSS Prevention

## Future Enhancements

1. Custom URL support
2. Analytics dashboard
3. User authentication
4. URL expiration
5. QR code generation

## Contributing

1. Fork the repository
2. Create feature branch
3. Submit pull request

## License

MIT Licensed - feel free to use and modify
