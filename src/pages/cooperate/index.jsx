import React, { useState } from "react";
import "../../assets/custom.scss";

export default function Cooprate() {
    const [cooprateForm, setCooprateForm] = useState({
        name: "",
        phone: "",
        email: "",
        website: "",
        title: "",
        content: "",
    });
    const [error, setError] = useState({
        name: "",
        phone: "",
        email: "",
        website: "",
        title: "",
        content: "",
    });

    function handleChangeInput(e) {
        let name = e.target.name;
        let value = e.target.value;

        setCooprateForm({
            ...cooprateForm,
            [name]: value,
        });
        // if (value) {
        //     setError("");
        // }
    }
    // function onBlur(e) {
    //     let errorBlur = {};
    //     let _this = e.target;
    //     let value = _this.value;

    //     if (value === "" && _this.name === "name") {
    //         errorBlur.name = "Tên không được để trống";
    //     }
    //     if (value === "" && _this.name === "phone") {
    //         errorBlur.phone = "Số điện thoại không được để trống";
    //     }
    //     if (value === "" && _this.name === "email") {
    //         errorBlur.email = "Email không được để trống";
    //     }
    //     if (value === "" && _this.name === "title") {
    //         errorBlur.title = "Tiêu đề không được để trống";
    //     }
    //     if (value === "" && _this.name === "content") {
    //         errorBlur.content = "Nội dung không được để trống";
    //     }
    //     setError(errorBlur);
    // }

    function handleSubmit() {
        let errorInput = {};

        //name
        if (!cooprateForm.name.trim()) {
            errorInput.name = "Tên không được bỏ trống";
        }

        //phone
        if (!cooprateForm.phone) {
            errorInput.phone = "Số điện thoại không được bỏ trống";
        }

        if (cooprateForm.phone && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(cooprateForm.phone)) {
            errorInput.phone = "Số điện thoại không đúng định dạng";
        }

        //email
        if (!cooprateForm.email) {
            errorInput.email = "Email không được bỏ trống";
        }
        if (cooprateForm.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(cooprateForm.email)) {
            errorInput.email = "Email không đúng định dạng";
        }

        //website
        if (
            cooprateForm.website &&
            !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
                cooprateForm.website
            )
        ) {
            errorInput.website = "Website không đúng định dạng";
        }

        //title
        if (!cooprateForm.title) {
            errorInput.title = "Tiêu đề không được bỏ trống";
        }

        //content
        if (!cooprateForm.content) {
            errorInput.content = "Nội dung không được bỏ trống";
        }

        setError(errorInput);

        if (Object.keys(errorInput).length === 0) {
            console.log(cooprateForm);
        }
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau
                    tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các
                    đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>
                            Họ và tên<span>*</span>
                        </p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và tên bạn"
                            value={cooprateForm.name}
                            onChange={handleChangeInput}
                            // onBlur={onBlur}
                        />
                        {error.name && (
                            <span className="error-text">{error.name}</span>
                        )}
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={cooprateForm.phone}
                            onChange={handleChangeInput}
                            // onBlur={onBlur}
                        />
                        {error.phone && (
                            <span className="error-text">{error.phone}</span>
                        )}
                    </label>
                    <label>
                        <p>
                            Email<span>*</span>
                        </p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email của bạn"
                            value={cooprateForm.email}
                            // onBlur={onBlur}
                            onChange={handleChangeInput}
                        />
                        {error.email && (
                            <span className="error-text">{error.email}</span>
                        )}
                    </label>
                    <label>
                        <p>Website</p>
                        <input
                            type="text"
                            name="website"
                            placeholder="Đường dẫn website http://"
                            value={cooprateForm.website}
                            onChange={handleChangeInput}
                        />
                        {error.website && (
                            <span className="error-text">{error.website}</span>
                        )}
                    </label>
                    <label>
                        <p>
                            Tiêu đề<span>*</span>
                        </p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Tiêu đề liên hệ"
                            value={cooprateForm.title}
                            onChange={handleChangeInput}
                            // onBlur={onBlur}
                        />
                        {error.title && (
                            <span className="error-text">{error.title}</span>
                        )}
                    </label>
                    <label>
                        <p>
                            Nội dung<span>*</span>
                        </p>
                        <textarea
                            name="content"
                            id
                            cols={30}
                            rows={10}
                            defaultValue={""}
                            value={cooprateForm.content}
                            onChange={handleChangeInput}
                            // onBlur={onBlur}
                        />
                        {error.content && (
                            <span className="error-text">{error.content}</span>
                        )}
                    </label>
                    <div className="btn main rect" onClick={handleSubmit}>
                        đăng ký
                    </div>
                </div>
            </section>
        </main>
    );
}
