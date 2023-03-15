using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR;

public class PresenceHub : Hub
{
    [Authorize]
    public override async Task OnConnectedAsync()
    {
        await Clients.Others.SendAsync("User connected", Context.User.GetUsername());
    }

    public override async Task OnDisconnectedAsync(Exception exception)
    {
        await Clients.Others.SendAsync("User disconnected", Context.User.GetUsername());

        await base.OnDisconnectedAsync(exception);
    }
}