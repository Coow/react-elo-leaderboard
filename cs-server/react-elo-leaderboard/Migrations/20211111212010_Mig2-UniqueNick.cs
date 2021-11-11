using Microsoft.EntityFrameworkCore.Migrations;

namespace react_elo_leaderboard.Migrations
{
    public partial class Mig2UniqueNick : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Nick",
                table: "Player",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Player_Nick",
                table: "Player",
                column: "Nick",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Player_Nick",
                table: "Player");

            migrationBuilder.AlterColumn<string>(
                name: "Nick",
                table: "Player",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
