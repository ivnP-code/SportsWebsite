using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApexSportApi.Data;
using ApexSportApi.Models;

namespace ApexSportApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] string? gender)
    {
        var query = _context.Products.AsQueryable();

        if (!string.IsNullOrEmpty(gender))
        {
            query = query.Where(p => p.Gender == gender);
        }

        return await query.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound();

        return product;
    }

    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(string category)
    {
        return await _context.Products
            .Where(p => p.Category == category)
            .ToListAsync();
    }
}