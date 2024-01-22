using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Exercice_Areas.Models;

namespace Exercice_Areas.Data
{
    public class Exercice_AreasContext : DbContext
    {
        public Exercice_AreasContext (DbContextOptions<Exercice_AreasContext> options)
            : base(options)
        {
        }

        public DbSet<Exercice_Areas.Models.Chat> Chat { get; set; } = default!;
    }
}
