/* import java.util.Scanner;

public class BmiCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("TÍNH CHỈ SỐ BMI");
        System.out.print("Nhập cân nặng? ");
        double weight = scanner.nextDouble();
        System.out.print("Nhập chiều cao? ");
        double height = scanner.nextDouble();
        System.out.println("Chọn loại tuổi?");
        System.out.println("Trẻ em, trung niên, già, lớn tuổi");
        System.out.print("Già, lớn tuổi: ");
        String ageType = scanner.next();

        double bmi = calculateBmi(weight, height);
        String bmiCategory = getBmiCategory(bmi);

        System.out.printf("TÍNH BMI%nKẾT QUẢ%n%.2f%n", bmi);
        System.out.printf("BÉO PHÌ ĐỘ %s%n", bmiCategory);

        if (ageType.equalsIgnoreCase("Già") || ageType.equalsIgnoreCase("Lớn tuổi")) {
            System.out.println("Hạn chế ăn mỡ động vật.");
        }
    }

    private static double calculateBmi(double weight, double height) {
        return weight / Math.pow(height, 2);
    }

    private static String getBmiCategory(double bmi) {
        if (bmi < 18.5) {
            return "1";
        } else if (bmi < 24.9) {
            return "2";
        } else {
            return "3";
        }
    }
} */
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = document.getElementById("age").value;
    const ageGroup = getAgeGroup(age);
  
    // BMI calculation formula
    const bmi = weight / (height * height);
  
    // Determine BMI category based on age group
    const bmiCategory = getBMICategory(bmi, ageGroup);
  
    // Update BMI value element
    document.getElementById("bmi-value").textContent = bmi.toFixed(2);
  
    // Update BMI category element with additional message
    const bmiCategoryElement = document.getElementById("bmi-category");
    bmiCategoryElement.textContent = bmiCategory;
  
    // Add additional message based on BMI category and age group
    const messageElement = document.createElement("p");
    messageElement.style.color = "red"; // Set text color to red
  
    let message = "";
    if (ageGroup === "trung-nien") {
      if (bmiCategory === "Béo phì cấp độ I") {
        message = "Khám định kỳ.";
      }
    } else if (ageGroup === "gia-lon-tuoi") {
      if (bmiCategory === "Béo phì cấp độ II") {
        message = "Tập thể dục thường xuyên.";
      } else if (bmiCategory === "Béo phì cấp độ III") {
        message = "Hạn chế ăn mỡ động vật.";
      }
    }
  
    // Append the message element after the BMI category
    bmiCategoryElement.appendChild(messageElement);
    messageElement.textContent = message;
  }
  
  function getAgeGroup(age) {
    if (age >= 18 && age < 60) {
      return "trung-nien";
    } else {
      return "gia-lon-tuoi";
    }
  }
  
  function getBMICategory(bmi, ageGroup) {
    if (ageGroup === "trung-nien") {
      if (bmi < 25) {
        return "Bình thường";
      } else if (bmi < 30) {
        return "Béo phì cấp độ I";
      } else {
        return "Béo phì cấp độ II";
      }
    } else {
      if (bmi < 24) {
        return "Bình thường";
      } else if (bmi < 27) {
        return "Béo phì cấp độ II";
      } else {
        return "Béo phì cấp độ III";
      }
    }
  }