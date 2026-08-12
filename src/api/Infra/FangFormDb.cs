using LinqToDB;
using LinqToDB.Data;
using Api.Domain.Entities;

namespace Api.Infra;

public class FangFormDb : DataConnection
{
    public FangFormDb(DataOptions options) : base(options) { }

    public ITable<Exercises> Exercises => this.GetTable<Exercises>();
    public ITable<Routines> Routines => this.GetTable<Routines>();
    public ITable<RoutineExercises> RoutineExercises => this.GetTable<RoutineExercises>();
}
