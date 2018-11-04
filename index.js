document.querySelector('#js-submit').addEventListener('click', generatePDF)

function generatePDF(e) {
	e.preventDefault()
	const doc = new jsPDF()
	const companyName = document.querySelector('#js-company')
	const shotname = document.querySelector('#js-shotname')

	console.log(companyName, shotname)

	// doc.text('Hello world!', 10, 10)
	// doc.save('a4.pdf')
}
