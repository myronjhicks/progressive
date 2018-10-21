<template>
    <div class="login-div">
        <h2>Admin Login</h2>
        <p>Enter your email and password</p>
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email"/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password"/>
        </div>
        <div class="forgot">
            <router-link to="pw-reset">Forgot Password?</router-link>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 70px 70px 70px;
    }
    .login-div .form-group {
        margin-bottom: 10px;
    }
    .login-div .form-control {
        background: #f7f7f7;
        border-radius: 2px;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #d4d4d4;
        width: 300px;
    }
    .login-div {
        text-align: center;
    }
    .forgot a {
        color: #777777;
        font-size: 14px;
        text-decoration: underline;
    }
    .forgot {
        text-align: left;
        margin-bottom: 30px;
    }
</style>
