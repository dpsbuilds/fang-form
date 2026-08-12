using Api.Infra;
using Api.Responses;
using Api.Services.Interfaces;
using LinqToDB.Async;

namespace Api.Services;

public class RoutineService : IRoutineService
{
    private readonly FangFormDb _db;

    public RoutineService(FangFormDb db)
    {
        _db = db;
    }

    public async Task<IEnumerable<RoutineResponse>> GetAllAsync()
    {
        var routines = from r in _db.Routines
                       select new RoutineResponse
                       {
                           Id = r.Id,
                           Name = r.Name,
                           CreatedDate = r.CreatedDate
                       };

        return await routines.ToListAsync();
    }
}
