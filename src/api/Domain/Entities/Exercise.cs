using LinqToDB.Mapping;

namespace Api.Domain.Entities;

[Table(Name = "exercises")]
public class Exercises
{
    [PrimaryKey, Identity]
    [Column(Name = "id")]
    public int Id { get; set; }

    [Column(Name = "name"), NotNull]
    public required string Name { get; set; }

    [Column(Name = "createdDate")]
    public DateTime CreatedDate { get; set; }
}
