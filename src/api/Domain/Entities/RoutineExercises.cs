using LinqToDB.Mapping;

namespace Api.Domain.Entities;

[Table(Name = "routine_exercises")]
public class RoutineExercises
{
    [PrimaryKey, Identity]
    [Column(Name = "id")]
    public int Id { get; set; }

    [Column(Name = "routine_id"), NotNull]
    public required string RoutineId { get; set; }

    [Column(Name = "exercise_id"), NotNull]
    public required string ExerciseId { get; set; }
}
