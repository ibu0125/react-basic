using backendApp.Models; // UserInfo ���f���̖��O��Ԃ��C���|�[�g
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// CORS�̐ݒ��ǉ�
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:3001", "http://localhost:3002", "http://localhost:3000") // �t�����g�G���h��URL���w��
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// MySQL �f�[�^�x�[�X�̐ݒ�
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 21)))); // ���ϐ��܂��͐ݒ�t�@�C������ڑ���������擾

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if(!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// CORS���g�p����
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
