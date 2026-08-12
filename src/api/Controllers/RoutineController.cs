// Controllers/RoutinesController.cs
using Api.Responses;
using Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoutinesController(IRoutineService routineService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<RoutineResponse>>> GetAll()
    {
        var routines = await routineService.GetAllAsync();

        return Ok(routines);
    }
}
