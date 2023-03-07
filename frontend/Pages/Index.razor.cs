using BlazorApp.Data;
using Microsoft.AspNetCore.Components;

namespace BlazorApp.Pages;

public partial class Index : ComponentBase
{
    [Inject]
    BlazorApp.Services.MessageService MessageService { get; set; }

    private string[] users = { "uwu", "grr", "uwu", "bernt", "fef" };

    private string name = "Chat";

    private List<Message> messages = new List<Message>();

    private bool loading = true;

    private string message = "";

    private string username = "";

    private string? user = null;

    private long lastCheck = DateTime.Now.ToFileTimeUtc() / 10000;

    protected override void OnInitialized()
    {
        base.OnInitialized();
        CheckNewMessages();
    }

    protected override async Task OnInitializedAsync()
    {
        messages = (await MessageService.GetMessages()).ToList();
        this.sort();
        loading = false;
    }

    async void CheckNewMessages()
    {
        while (true)
        {
            if (loading)
            {
                await Task.Delay(200);
                continue;
            }
            await Task.Delay(500);


            Console.WriteLine("CHECKING NEW MESSAGES");
            long newCheck = DateTime.Now.ToFileTimeUtc() / 10000;
            Console.WriteLine(lastCheck);
            Console.WriteLine(newCheck);
            List<Message> n = (await MessageService.getNewMessages(lastCheck)).ToList();
            lastCheck = newCheck;
            if (n.Count() != 0)
            {
                Console.WriteLine("NEW MESSAGES RECEIVED");
                foreach (Message message in n)
                    Console.WriteLine(message);
                messages.AddRange(n);
                this.sort();
                StateHasChanged();
            }
        }
    }

    private void sort()
    {
        messages = messages
        .GroupBy(x => x.id)
        .Select(x => x.First())
        .OrderByDescending(o => o.date)
        .ToList();
    }

    private async void send()
    {
        if (user != null)
        {
            await MessageService.CreateMessage(message);
            messages = (await MessageService.GetMessages()).ToList();
            this.sort();
            message = "";
            StateHasChanged();
        }
    }

    private void join()
    {
        user = username;
    }
}