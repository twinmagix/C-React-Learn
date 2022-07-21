using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set;} = default!;
        public string Title { get; set;} = default!;

        public DateTime Date { get; set;}
        public string Description { get; set;} = default!;
        public string Category { get; set;} = default!;
        public string City { get; set;} = default!;
        public string Venue { get; set;} = default!;
    }
}