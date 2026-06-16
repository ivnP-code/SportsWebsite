namespace ApexSportApi.Models;

public class Product
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public decimal Price { get; set; }
    public decimal? OriginalPrice { get; set; }
    public required string Image { get; set; }
    public required string Category { get; set; }
    public string[] Sizes { get; set; } = [];
    public bool IsNew { get; set; }
    public int? Discount { get; set; }
    public decimal Rating { get; set; }
    public string Gender { get; set; }
    public string Type { get; set; }
    public string? Subcategory { get; set; }
}
