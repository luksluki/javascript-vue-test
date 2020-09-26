<template>
  <v-container fluid>
    <v-row no-gutters>
        <v-col cols="6" class="pa-6">
          <v-card
            width="100%"
          >
            <v-img
              class="white--text align-end"
              height="70px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Todo List</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              
              <scroller :loading="loading" width="100%" height="345px" class="pr-5">
                <template v-slot:loading>
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                </template>
                <template v-slot:item>
                  <draggable v-bind="dragOptions" v-model="incomplete" group="todo" @change="log">
                    <transition-group type="transition">
                      <div v-for="todo in incomplete" :key="todo.id">
                        <v-card class="mb-1" color="#245e93">
                          <v-row no-gutters>
                            <v-col cols="6" class="d-flex justify-start">
                              <v-card-title>
                                <span class="white--text my-n5">User : {{ todo.userId }}</span>
                              </v-card-title>
                            </v-col>
                            <v-col cols="6" class="d-flex justify-end">
                              <v-chip
                                class="ma-2"
                                color="success"
                                x-small
                                v-if="todo.completed"
                              >
                                complete
                              </v-chip>
                              <v-chip
                                class="ma-2 white--text"
                                color="red"
                                x-small
                                v-else
                              >incomplete 
                              </v-chip>
                            </v-col>
                          </v-row>
                          <v-card-text>
                            <span class="white--text my-n8">title : {{ todo.title }}</span>
                          </v-card-text>
                          <v-card-actions class="mt-n6 d-flex justify-end">
                            <v-btn @click="del(todo.id)" class="d-flex justify-end" icon color="#EAF4EE">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <EditTodo :data="todo"/>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </transition-group>
                  </draggable>
                </template>
              </scroller>
            </v-card-text>

            <v-card-actions>
              <AddTodo />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" height="100%" class="pa-6">
          <v-card
            width="100%"
            height="100%"
          >
            <v-img
              class="white--text align-end"
              height="70px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Done Todo</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <scroller :loading="loading" width="100%" height="360px" class="pr-5">
                <template v-slot:loading>
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                </template>
                <template v-slot:item>
                  <draggable v-bind="dragOptions" v-model="complete" group="todo" @change="log">
                    <transition-group type="transition">
                      <div v-for="todo in complete" :key="todo.id">
                        <v-card class="mb-1" color="#245e93">
                          <v-row no-gutters>
                            <v-col cols="6" class="d-flex justify-start">
                              <v-card-title>
                                <span class="white--text my-n5">User : {{ todo.userId }}</span>
                              </v-card-title>
                            </v-col>
                            <v-col cols="6" class="d-flex justify-end">
                              <v-chip
                                class="ma-2"
                                color="success"
                                x-small
                                v-if="todo.completed"
                              >
                                complete
                              </v-chip>
                              <v-chip
                                class="ma-2 white--text"
                                color="red"
                                x-small
                                v-else
                              >incomplete 
                              </v-chip>
                            </v-col>
                          </v-row>
                          <v-card-text>
                            <span class="white--text my-n8">title : {{ todo.title }}</span>
                          </v-card-text>
                          <v-card-actions class="mt-n6 d-flex justify-end">
                            <v-btn @click="del(todo.id)" class="d-flex justify-end" icon color="#EAF4EE">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <EditTodo :data="todo"/>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </transition-group>
                  </draggable>
                </template>
              </scroller>
            </v-card-text>

            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
import {Scroller} from '@/components';
import { createNamespacedHelpers } from "vuex";

import CardLoading from './components/CardLoading';
import AddTodo from './addTodo'
import EditTodo from './editTodo'

const todo = createNamespacedHelpers('todo')

  export default {
    name: "Home",
    components: {
      Scroller, draggable, CardLoading, AddTodo, EditTodo
    },
    data: () => ({
    }),
    computed : {
      incomplete: {
        get() {
          return this.incompleteTodos
        },
        set(value) {
          for (let i=0; i<value.length;i++) {
            if (value[i].completed == true) {
              value[i].completed = false
            }
          }
          this.$store.commit('todo/SET_INCOMPLETE', value)
        }
      },
      complete: {
        get() {
          return this.completeTodos
        },
        set(value) {
          for (let i=0; i<value.length;i++) {
            if (value[i].completed == false) {
              value[i].completed = true
            }
          }
          this.$store.commit('todo/SET_COMPLETE', value)
        }
      },
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        }
      },
      ...todo.mapGetters(['allTodos','completeTodos','incompleteTodos']),
      ...todo.mapState(['loading'])
    },
    methods: {
      ...todo.mapActions(['getTodos','deleteTodo']),
      add: function() {
        console.log('add')
        // this.list.push({ name: "Juan" });
      },
      replace: function() {
        console.log('replace')
        // this.list = [{ name: "Edgard" }];
      },
      clone: function(el) {
        console.log('clone')
        return {
          name: el.name + " cloned"
        };
      },
      log: function(evt) {
        window.console.log(evt);
      },
      del (id) {
        this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#29537C',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteTodo(id)
          this.$swal.fire({
            title: 'Deleted!',
            text: 'Todo has been deleted.',
            icon: 'success',
            confirmButtonColor: '#29537C'
          })
        }
      })
      }
    },
    created() {
      this.getTodos();
    },
  }
</script>

<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>