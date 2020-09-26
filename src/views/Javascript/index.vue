<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="12">
                <h1 class="text-center">Javascript Test</h1>
                <v-row no-gutters>
                    <v-col cols="12" class="pa-4">
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <h3>1. Random Palindrome</h3>
                            <v-text-field color="#29537C" label="Input Length" :rules="[v => required(v, 'Input Length')]" v-model="n"></v-text-field>
                            <div class="fill-width d-flex justify-center">
                                <v-btn dark color="#29537C" :loading="loading" class="text-capitalize" @click="generatePalindrome(n)">Generate Random Palindrome</v-btn>
                            </div>
                            <div class="fill-width d-flex justify-center mt-2">
                                <p class="text-center">Result : 
                                <br>{{palindrome}}</p>
                            </div>
                        </v-form>
                    </v-col>
                    <v-col cols="12" class="pa-4">
                        <v-form ref="form2" v-model="valid2" lazy-validation>
                            <h3>2. Random Array</h3>
                            <span>stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,"</span>
                            <v-text-field color="#29537C" label="Number of Index Array" :rules="[v => required(v, 'Number of Index Array')]" v-model="number"></v-text-field>
                            <v-text-field color="#29537C" label="Amount of Data in One Index" :rules="[v => required(v, 'Amount of Data in One Index')]" v-model="amount"></v-text-field>
                            <div class="fill-width d-flex justify-center">
                                <v-btn dark color="#29537C" :loading="loading" class="text-capitalize" @click="randomArray(number,amount)">Random Array</v-btn>
                            </div>
                            <div class="fill-width d-flex justify-center mt-2">
                                <p class="text-center">Result : 
                                <br>{{random}}</p>
                            </div>
                        </v-form>
                    </v-col>
                    <v-col cols="12" class="pa-4">
                        <v-form ref="form3" v-model="valid3" lazy-validation>
                            <h3>3. Sorting</h3>
                            <span>- Numeric: 10,9,102,66,5421,1,0 <br>
                            - String: Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf <br>
                            - Alphanumeric: Wulan,Raharjo,Widya,10,9,102,66,5421,1,0,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf
                            </span>
                            <div class="fill-width d-flex justify-center mt-2">
                                <v-btn dark color="#29537C" :loading="loading" class="text-capitalize" @click="sorting()">Sorting</v-btn>
                            </div>
                            <div class="fill-width d-flex justify-center mt-2">
                                <p class="text-center">Result : 
                                <br>- Numeric: {{ numeric }}
                                <br>- String: {{ string }}
                                <br>- Alphanumeric: {{ alphanumeric }}</p>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import validator from "@/helpers/validator";
export default {
    name: 'Javascript',
    data: () => ({
        valid: false,
        valid2: false,
        valid3: false,
        n:null,
        id: '',
        palindrome: '',
        loading:false,
        number: null,
        amount:null,
        random: [],
        numeric: null,
        string: '',
        alphanumeric: ''
    }),
    methods: {
        ...validator,
        generatePalindrome(length) {
            if(this.$refs.form.validate()){
                this.loading=true
                let result           = '';
                let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.palindrome=''
                if(this.n%2 === 0) {
                    let a = this.n/2
                    let b = 0
                    for (let i=0 ; i<result.length ; i++){
                        if(i>=a) {
                            b--
                            this.palindrome += result.charAt(b)
                        } else {
                            this.palindrome += result.charAt(b)
                            b++
                        }
                        console.log('palindrome: ',this.palindrome)
                    }
                } else {
                    let a = (this.n/2) - 0.5
                    let b = 0
                    for (let i=0 ; i<result.length ; i++){
                        if(i>=a) {
                            this.palindrome += result.charAt(b)
                            b--
                        } else {
                            this.palindrome += result.charAt(b)
                            b++
                        }
                        console.log('palindrome: ',this.palindrome)
                    }
                }
                this.loading=false
                return result;
            }
        },
        randomArray(a,b) {
            if(this.$refs.form2.validate()){
                a,b
                let stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,"
                let arrayData = stringArr.split(',')
                arrayData.pop()
                arrayData.shift()
                console.log(arrayData)
                this.random = []
                for (let i=0; i<a ; i++){
                    for (let j=0; j<b; j++) {
                        if (j>0) {
                            this.random[i] = this.random[i] + ' ' + arrayData[Math.floor(Math.random() * arrayData.length)]
                        } else {
                            this.random[i] = arrayData[Math.floor(Math.random() * arrayData.length)]
                        }
                    }
                }
            }
        },
        sorting(){
            // Numeric sorting with selection sort
            let n = "10,9,102,66,5421,1,0"
            // set to array
            let dataNstring = n.split(',')
            // set to array number
            let dataN = dataNstring.map(x => +x)
            let temp = []
            let x = null
            for (let i=0; i< dataN.length ; i++){
                x= i
                for (let j = i+1 ; j<dataN.length; j++){
                    if (dataN[j] < dataN[x]) {
                        x= j
                    }
                }
                temp = dataN[i];
                dataN[i] = dataN[x];
                dataN[x] = temp;
            }
            this.numeric = dataN.toString()
            
            let s = "Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf"
            let dataS = s.split(',')
            temp = []
            x = null
            for (let i=0; i< dataS.length ; i++){
                x= i
                for (let j = i+1 ; j<dataS.length; j++){
                    if (dataS[j] < dataS[x]) {
                        x= j
                    }
                }
                temp = dataS[i];
                dataS[i] = dataS[x];
                dataS[x] = temp;
            }
            this.string = dataS.toString()

            let a = "Wulan,Raharjo,Widya,10,9,102,66,5421,1,0,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf"
            let dataA = a.split(',')

            temp = []
            x = null
            for (let i=0; i< dataA.length ; i++){
                x= i
                for (let j = i+1 ; j<dataA.length; j++){
                    if (dataA[j] < dataA[x]) {
                        x= j
                    }
                }
                temp = dataA[i];
                dataA[i] = dataA[x];
                dataA[x] = temp;
            }
            this.alphanumeric = dataA.toString()
        }
    }
}
</script>