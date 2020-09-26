<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="#29537c"
            class="text-capitalize"
            dark
            v-bind="attrs"
            v-on="on"
        >
            <span>Add Todo</span>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" style="color:#29537c;">Add Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                <v-col cols="12" sm="12">
                    <v-select
                    :items="[1,2,3,4,5,6,7,8,9,10]"
                    label="User ID*"
                    required
                    v-model="form.userId"
                    :rules="[v => required(v, 'User Id')]"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="form.title" label="Title *" :rules="[v => required(v, 'Title')]" required></v-text-field>
                </v-col>
                </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#29537c" text @click="handleClose">Close</v-btn>
          <v-btn color="#29537c" text @click="handleSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import validator from "@/helpers/validator";
import { createNamespacedHelpers } from "vuex";

const todo = createNamespacedHelpers('todo')

export default {
    name: 'addTodo',
    data: () => ({
      dialog: false,
      valid: false,
      form: {
        userId : null,
        title : '',
        completed : false
      }
    }),
    methods: {
        ...validator,
        ...todo.mapActions(['addTodo']),
        validate () {
            this.$refs.form.validate();
        },
        handleSave () {
            if(this.$refs.form.validate()){
                console.log('masuk')
                this.addTodo(this.form)
                this.dialog = false
                this.$swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Todo Successfully Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
        handleClose () {
            this.dialog = false
            this.$refs.form.reset()
        }
    }
  }
</script>