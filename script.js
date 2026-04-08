function togglePerf() {
    const isChecked = document.getElementById('checkPerf').checked;
    document.getElementById('inPerfDate').style.display = isChecked ? 'block' : 'none';
    document.getElementById('perfRow').style.display = isChecked ? 'block' : 'none';
}

function update() {
    const docType = document.getElementById('docType').value;
    document.getElementById('labelDocType').innerText = docType;
    document.getElementById('labelDocName').innerText = docType;

    const color = document.getElementById('borderColor').value;
    document.getElementById('subBox').className = 'submission-box border-' + color;

    const pairs = {
        'inNo': 'outNo', 'inName': 'outName', 'inCourseCode': 'outCourseCode',
        'inCourseTitle': 'outCourseTitle', 'inTeacher': 'outTeacher',
        'inDesignation': 'outDesignation', 'inStudent': 'outStudent',
        'inRoll': 'outRoll', 'inYear': 'outYear', 'inTerm': 'outTerm',
        'inSubDate': 'outSubDate', 'inPerfDate': 'outPerfDate'
    };

    for (const [inputId, outputId] of Object.entries(pairs)) {
        const input = document.getElementById(inputId);
        const output = document.getElementById(outputId);
        if (input && output) {
            output.innerText = input.value || output.innerText;
        }
    }
}