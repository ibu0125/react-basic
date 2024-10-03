using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backendApp.Models;

namespace backendApp.Controllers {
    [ApiController]
    [Route("api/[Controller]")]
    public class FormController : ControllerBase {
        private readonly string connectionString = "Server=localhost;Database=UserInformationDb;User=root;Password=Ibuki0606#;";

        [HttpPost("submit")]
        public IActionResult Submit([FromBody] Infomation user) {
            Console.WriteLine($"Name: {user.Name}, Email: {user.Email}, Message: {user.Message}");
            using MySqlConnection connection = new MySqlConnection(connectionString);
            try {
                connection.Open();

                string submitQuery = "INSERT INTO UserInfo (Name, Email, Message) VALUES (@Name, @Email, @Message)";
                using(MySqlCommand cmd = new MySqlCommand(submitQuery, connection)) {
                    cmd.Parameters.AddWithValue("@Name", user.Name);
                    cmd.Parameters.AddWithValue("@Email", user.Email);
                    cmd.Parameters.AddWithValue("@Message", user.Message);
                    cmd.ExecuteNonQuery();
                }

                return Ok(new
                {
                    message = "送信しました" // タイポを修正
                });
            }
            catch(Exception ex) {
                // エラーログを追加することをお勧めします
                Console.WriteLine($"Error: {ex.Message}"); // ログにエラーを表示
                return StatusCode(500, new
                {
                    message = ex.Message
                });
            }
        }
    }
}
