
function calculate() {

    const c1 = parseInt(document.getElementById("course1").value)
    const c2 = parseInt(document.getElementById("course2").value)
    const c3 = parseInt(document.getElementById("course3").value)
    const c4 = parseInt(document.getElementById("course4").value)
    const c5 = parseInt(document.getElementById("course5").value)

    if (c1 > 100 || c2 > 100 || c3 > 100 || c4 > 100 || c5 > 100)
        alert('Please enter valid marks!')
    else {
        const total = c1 + c2 + c3 + c4 + c5
        const per = (total * 100) / 500
        document.getElementById("marksObtained").innerHTML = total
        document.getElementById("percent").innerHTML = per + "%"

        const grade = document.getElementById("grade")

        if (per >= 90) {
            grade.textContent = 'A+'
        }
        else if (per >= 80) {
            grade.textContent = 'A'
        }
        else if (per >= 70) {
            grade.textContent = 'B'
        }
        else if (per >= 60) {
            grade.textContent = 'C'
        }
        else if (per >= 50) {
            grade.textContent = 'D'
        }
        else if (per >= 40) {
            grade.textContent = 'E'
        }
        else {
            grade.textContent = 'F'
        }

        if (c1 < 40 || c2 < 40 || c3 < 40 || c4 < 40 || c5 < 40)
            document.getElementById("status").innerHTML = "<span style='color : red;'>Fail</span>"
        else {
            document.getElementById("status").innerHTML = "<span style='color : green;'>Pass</span>"
        }
    }
    return false;

}

