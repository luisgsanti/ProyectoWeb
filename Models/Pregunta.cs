using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoWeb.Models
{
    public class Pregunta
    {
        [JsonProperty("id")] public int Id { get; set; }
        [Required]
        [JsonProperty("descripcion")] 
        public string Descripcion { get; set; }
        [JsonProperty("categoria")] public string Categoria { get; set; }
        [JsonProperty("estado")] public bool Estado { get; set; }
    }
}