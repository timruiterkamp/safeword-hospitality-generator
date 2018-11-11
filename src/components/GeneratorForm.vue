<template>
    <form>
        <fieldset>
            <label for="companyname">What is your company name</label>
            <input type="text" v-model="companyName" id="js-company" name="companyname" placeholder="Company name" required>
        </fieldset>
        <fieldset class="radio-selection">
            <div>
                <input type="radio" id="choose" value="choose" v-model="picked" checked="checked">
                <label for="choose">I want to choose a safeword</label>
            </div>
            <div>
                <input type="radio" id="own" value="own" v-model="picked">
                <label for="own">I fill in my own safeword</label>
            </div>
        </fieldset>
        <fieldset  v-if="this.picked">
            <label for="shotname">Choose your safeword (drink name for example)</label>
            <select name="shotname" id="js-shotname" v-model="shotname" v-if="this.picked === 'choose'">
                <option disabled selected>-- Select option --</option>
                <option value="Angel shot">Angel shot</option>
                <option value="Trace shot">Trace shot</option>
                <option value="Fuzz shot">Fuzz shot</option>
                <option value="Red margarita">Red margarita</option>
                <option value="Flickering daiquiry" >Flickering daiquiry</option>
                <option value="Tropical cola">Tropical cola</option>
            </select>
            <input type="text" v-model="shotname" v-if="this.picked === 'own'" />
        </fieldset>
        <section v-if="companyName || this.picked">
            <h3>Preview of the message:</h3>
            <h3 class="company-name">{{companyName}}</h3>
            <h4>Are you on a date that isn't going well?</h4>
            <p>Do you feel unsafe or just a bit weird?</p>
            <p>We are here to help. Just go to the bar and order an:</p>
            <h5 class="shot-name">{{shotname}}</h5>
            <p><strong>Neat:</strong> Your bartender will escort you to your vehicle.</p>
            <p><strong>With ice:</strong> Your bartender will call a taxi or Uber for you.</p>
            <p><strong>With lime:</strong> Your bartender will call the police.</p>
            <p><strong>We handle things discreetly, we want you safe!</strong></p>
        </section> 
        <input type="submit" id="js-submit" value="Generate pdf" @click="pdfgen()">
    </form>
</template>

<script>
export default {
    name: 'GeneratorForm',
    data() {
        return {
            companyName: '',
            shotname: '',
            picked: ''
        }
    },
    methods: {
        pdfgen() {
        const pdfMake = require('pdfmake/build/pdfmake.js')
        
        if (pdfMake.vfs == undefined){
            const pdfFonts = require('pdfmake/build/vfs_fonts.js')
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
        }

        const docDefinition = { 	
            content: [
            {
                text: this.companyName || '',
                style: 'header'
            },
            {
            
                text: 'Are you on a date that isn\'t going well? \n Do you feel unsafe or just a bit weird? \n We are here to help. Just go to the bar and order an:',
                style: 'introduction'
                
            },
            {
                text: this.shotname,
                style: 'shotname'
            },
            {
                text: [
                    {text: 'Neat: ',  bold: true}, 'Your bartender will escort you to your vehicle. \n',
                    {text: 'With ice: ',  bold: true}, 'Your bartender will call a taxi or Uber for you. \n',
                    {text: 'With lime: ',  bold: true}, 'Your bartender will call the police. \n',  
                ],
                style: 'shotinfo'
            },
            {
                text: 'We handle things discreetly, we want you safe!',
                style: 'lastquote'
            },
        ],
        styles: {
            header: {
                fontSize: 36,
                bold: true,
                alignment: 'center',
                marginBottom: 30,
                color: 'red'
            },
            introduction: {
                fontSize: 16,
                alignment: 'center',
                lineHeight: 1.5
            },
            shotname: {
                fontSize: 24,
                alignment: 'center',
                marginTop: 15,
                marginBottom: 30,
                textDecoration: 'underline',
                borderBottom: '1px solid black',
                paddingBottom: 5,
                bold: true,
                color: '#092327'
            },
            shotinfo: {
                fontSize: 16,
                alignment: 'center',
                lineHeight: 1.5
            },
            lastquote: {
                fontSize: 16,
                marginTop: 15,
                bold: true,
                alignment: 'center'
            },
            }
        }
        pdfMake.createPdf(docDefinition).download('test.pdf')
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
    box-shadow: 0 0 5em 1px rgba(0,0,0,.15);
    border-radius: .5em;
    background-color: white;
    margin: 2em 0 0;

    display: flex;
    flex-direction: column;
    padding: 3em 3em 1.5em;
}

fieldset {
    display: flex;
    flex-direction: column;
    border: 0;
    margin: 1em 0;
    padding: 0;
}
fieldset.radio-selection {
    display: block;
}
fieldset.radio-selection input, fieldset.radio-selection select {
    max-width: 8%;
    display: inline-block;
}
fieldset.radio-selection label {
    width: 25%;
}
fieldset > div {
    float: left;
    width: 49%;
}
input {
    border: 1px solid #90C2E7;
    padding: 1em;
    margin: 1em 0;
    width: 100%;
}  


input::placeholder {
    font-size: 1.25em;
}

label {
    margin: .5em 0 0;
    font-weight: 500;
}
select {
    height: 3.5em;
    border: 1px solid #90C2E7;
    padding: .75em 1em;
    margin: 1em 0;
    width: 100%;
}

input[type="text"] {
    width: 96.5%;
}
input[type="submit"] {
    background-color: #00A9A5;
    color: white;
    font-size: 1em;
    border: 0;
}

h5.shot-name {
    font-size: 2em;
    text-decoration: underline;
    margin: 1em;
}
</style>
