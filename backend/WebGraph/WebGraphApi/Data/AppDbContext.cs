using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebGraph.Models;

namespace WebGraph.Data;

public class AppDbContext(DbContextOptions options)
    : IdentityDbContext<User>(options);