using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ProyectoWeb.Models
{
    public class Calificaciones
    {
        public int Id { get; set; }
        [Required] public string Id_Calificador { get; set; }
        [Required] public string Id_DocenteCalificado { get; set; }
        [Required] public string Tipo_Calificador { get; set; }
        public decimal nota { get; set; }
        public string fecha_Calificacion { get; set; }

    }
}