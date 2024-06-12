import Layout from "./Layout";

const CustomerLogin = () => {
    return (
        <Layout>
            <div>
                <h1>Customer Login</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </Layout>

    );
}

export default CustomerLogin;