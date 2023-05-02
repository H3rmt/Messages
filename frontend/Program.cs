using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using BlazorApp;
using BlazorApp.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddSingleton(sp => new HttpClient
{
    BaseAddress = new Uri("http://localhost:4000")
});

builder.Services.AddSingleton<MessageService>();
builder.Services.AddSingleton<AuthorService>();
builder.Services.AddSingleton<OnlineService>();

await builder.Build().RunAsync();
