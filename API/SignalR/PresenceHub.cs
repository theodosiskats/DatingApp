﻿using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR;

public class PresenceHub : Hub
{
    private readonly PresenceTracker _tracker;

    public PresenceHub(PresenceTracker tracker)
    {
        _tracker = tracker;
    }
    
    public override async Task OnConnectedAsync()
    {
        await Clients.Others.SendAsync("UserConnected", Context.User.GetUsername());
        await _tracker.UserConnected(Context.User.GetUsername(), Context.ConnectionId);

        var currentUsers = await _tracker.GetOnlineUsers();
        await Clients.All.SendAsync("GetOnlineUsers", currentUsers);
    }

    public override async Task OnDisconnectedAsync(Exception exception)
    {
        await _tracker.UserDisconected(Context.User.GetUsername(), Context.ConnectionId);
        
        await Clients.Others.SendAsync("UserDisconnected", Context.User.GetUsername());

        var currentUsers = await _tracker.GetOnlineUsers();
        await Clients.All.SendAsync("GetOnlineUsers", currentUsers);
        
        await base.OnDisconnectedAsync(exception);
    }
}