function solveQuation() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var result;
    if (a != 0) {
      result = -b/a;
    } else {
      result = "Phương trình vô nghiệm";
    }
    document.getElementById('result').innerHTML = "Kết quả: Nghiệm bằng  x=" + result;
  }