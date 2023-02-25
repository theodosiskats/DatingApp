namespace API.Extensions;

public static class DateTimeExtensions
{
    public static int CalculateAge(this DateOnly dob)
    {
        var today = DateOnly.FromDateTime(DateTime.UtcNow);

        var age = today.Year - dob.Year;

        if (dob > today.AddYears(-age)) age--;

        // Check if the birthdate falls on a leap year
        if (dob.Year % 4 == 0 && (dob.Year % 100 != 0 || dob.Year % 400 == 0))
        {
            if (dob > new DateOnly(dob.Year, 2, 28))
            {
                age++;
            }
        }

        return age;
    }
}