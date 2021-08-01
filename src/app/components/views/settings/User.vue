<template>
    <div>

        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand"> Users stack</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <!-- .prevent avoid reloading browser -->
                            <form @submit.prevent="sendUser">
                                <div class="form-group">
                                    <!-- form-control estilizar inputs -->
                                    <input type="text" placeholder="Insert names" class="form-control" v-model="user.names">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Insert first surname" class="form-control" v-model="user.first_surname">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Insert second surname" class="form-control" v-model="user.second_surname">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Insert user name" class="form-control" v-model="user.user_name">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Insert RUN" class="form-control" v-model="user.run">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Inser email" class="form-control" v-model="user.email">
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Insert password" class="form-control" v-model="user.password">
                                </div>
                                <template v-if="!edit">
                                    <button class="btn btn-primary btn-block">Save</button>
                                </template>
                                <template>
                                    <button class="btn btn-primary btn-block">Edit</button>
                                </template>

                            </form>

                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-borderer">
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Primer apellido</th>
                                <th>Segundo apellido</th>
                                <th>Nombre usuario</th>
                                <th>RUN</th>
                                <th>Email</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user of users">
                                <td>{{user.names}}</td>
                                <td>{{user.first_surname}}</td>
                                <td>{{user.second_surname}}</td>
                                <td>{{user.user_name}}</td>
                                <td>{{user.run}}</td>
                                <td>{{user.email}}</td>
                                <td>
                                    <button @click="deleteUser(user._id)" class="btn btn-danger">Delete</button>
                                    <button @click="editUser(user._id)" class="btn btn-secondary">Update</button>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    class User {
        constuctor(names,
                first_surname,
                second_surname,
                user_name,
                run,
                email,
                password) {
                    this.names = names;
                    this.first_surname = first_surname;
                    this.second_surname = second_surname;
                    this.user_name = user_name;
                    this.run = run;
                    this.email = email;
                    this.password = password;
                }
    }


export default {


    data() {
        return {
            user: new User(),
            users: [],
            edit: false,
            userToEdit: null
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        sendUser() {
            if(!this.edit) {

                fetch('/api/users', {
                    method: 'post',
                    body: JSON.stringify(this.user),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getUsers();
                });
            } else {
                fetch('api/users/' + this.userToEdit, {
                    method: 'put',
                    body: JSON.stringify(this.user),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getUsers();
                    this.edit = false;
                })
            }

            this.user = new User();

        },
        getUsers() {
            fetch('/api/users')
            .then(res => res.json())
            .then(users => {
                this.users = users;
            })
        },
        editUser(id) {
            this.edit = true;
            fetch('/api/users/' + id)
            .then(res => res.json())
            .then(user => {
                this.user = user;
                this.userToEdit = user._id;
            })
            // this.user = this.users.find(user => user._id == id);
            // fetch('/api/users/' + id)
        },
        deleteUser(id) {
            fetch('/api/users/' + id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            })
            .then(res => res.json())
            .then(data => {
                this.getUsers();
            })
        }
    }
}
</script>

<style>
    .form-group {
        margin-bottom: 10px;
    }
</style>
