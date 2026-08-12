using Api.Responses;

namespace Api.Services.Interfaces;

public interface IRoutineService
{
    Task<IEnumerable<RoutineResponse>> GetAllAsync();
}
