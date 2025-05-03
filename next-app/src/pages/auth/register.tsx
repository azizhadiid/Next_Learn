import Link from "next/link";

const RegisterPage = () => {
    return (
        <div>
            <div>Register Page</div>
            <p>Sudah punya akun? Login <Link href={"/auth/login"}>disini</Link></p>
        </div>
    );
};

export default RegisterPage;