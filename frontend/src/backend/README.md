# APEX SPORT Backend

ASP.NET Core REST API with SQLite for the APEX SPORT e-commerce platform.

## Getting Started

### Run the backend:
```bash
cd backend
dotnet restore
dotnet run
```

The API will start on `http://localhost:5000`

### API Endpoints:
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category

### Database:
- SQLite database: `apex_sport.db` (auto-created on first run)
- Data is seeded automatically on startup
