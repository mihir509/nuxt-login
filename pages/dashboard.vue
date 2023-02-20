<template>
    <div>
         <header class="header">
        <h1>Dashboard</h1>
        <button class="btn-logout" @click="logout">Logout</button>
    </header>
    <nav class="nav">
        <ul>
            <li><a href="#" class="active">Dashboard</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
    <section class="main-content">
        <aside class="sidebar">
            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Products</a></li>
            </ul>
        </aside>
        <article class="content">
            <h2>Dashboard Overview</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at est ex. Nam sed hendrerit urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam malesuada ultrices ipsum, a iaculis magna pulvinar eu. Donec eu sapien risus. Donec malesuada efficitur libero, eu facilisis nibh. Vestibulum sed massa ac velit aliquam egestas.</p>
        </article>
    </section>
    <footer class="footer">
        &copy; 2023 Dashboard
    </footer>
    </div>
</template>

<script>

import { logoutUser } from '../.nuxt/api.js'


export default {
    data (){
        return {
            loginData: {
            username: '',
            password: ''
            }
        }
    },
    methods: {
         async logout() {
      try {
        const response = await logoutUser(this.loginData)
        if(response){
          this.$router.push('/');
        }
      } catch (error) {
      this.errorMessage = 'Something went wrong. Please try again.'
        console.error(error)
      }
    }
    }
}
</script>

<style scoped>
/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Header styles */
.header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.btn-logout {
    border: none;
    background-color: #f00;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

/* Navigation styles */
.nav {
    background-color: #ddd;
    padding: 20px;
}

.nav ul {
    list-style: none;
    display: flex;
}

.nav li {
    margin-right: 20px;
}

.nav a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.nav a.active {
    background-color: #333;
    color: #fff;
}

/* Main content styles */
.main-content {
    display: flex;
    padding: 20px;
}

.sidebar {
    background-color: #ddd;
    padding: 20px;
    width: 200px;
    margin-right: 20px;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    text-decoration: none;
    color: #333;
}

.sidebar a:hover {
    color: blue
}
</style>