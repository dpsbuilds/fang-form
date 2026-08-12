using LinqToDB.Mapping;

namespace Api.Domain.Entities;

[Table(Name = "routines")]
public class Routines
{
    [PrimaryKey, Identity]
    [Column(Name = "id")]
    public int Id { get; set; }

    [Column(Name = "name"), NotNull]
    public required string Name { get; set; }

    [Column(Name = "createddate")]
    public DateTime CreatedDate { get; set; }
}
