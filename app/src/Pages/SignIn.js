import React, { useRef, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { SignInContainer } from '../Styles/SignIn.styles';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const emailEl = useRef();
  const passwordEl = useRef();
  const { signin, SignInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(emailEl.current.value, passwordEl.current.value);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <SignInContainer>
      {/* creating account's main body */}

      <div className="signin-container box-root">
        {/* creating square box in middle */}
        <div className="signin-container__form box-root">
          {/* creating a box for websiteLogo */}
          <div className="signin-logo box-root">#logo</div>
          {/* creating a box for signin form */}
          <div className="signin-form__layout">
            {/* creating signin title */}
            <div className="signin-form__title margin_top20">
              <span>Sign in to your account</span>
            </div>
            {/* creating signin form */}
            <div className="signin-form_body margin_top20">
              <form onSubmit={handleSubmit}>
                <div className="email_container margin_top12">
                  <div className="box-root margin_top12">
                    <label htmlFor="Email" className="input_title">
                      <span>Email</span>
                    </label>
                  </div>

                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    ref={emailEl}
                    required
                    className="input_content margin_top12"
                  />
                </div>
                <div className="padding_top32 box-root" />

                <div className="password_container margin_top12">
                  <div className="password_title margin_top12">
                    <label htmlFor="Password" className="input_title">
                      Password
                    </label>
                    <a name="reset" href="#" align="true">
                      Forgot Password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    ref={passwordEl}
                    required
                    className="input_content margin_top12"
                  />
                </div>

                <div className="padding_top32 box-root" />

                <div className="button_container">
                  <button name="signin-form__continue_button" type="submit">
                    <span>Continue</span>
                  </button>
                </div>

                <div className="signin-option__social">
                  <div className="signin-option__social-divider">
                    <div className="social-divider-line"></div>
                    <span className="social-divider-text">
                      or use one of these
                    </span>
                    <div className="social-divider-line"></div>
                  </div>
                </div>

                <div className="signin-option__social-appIconContainer">
                  {/* link to fetch Google ID */}

                  <div
                    onClick={(e) => SignInWithGoogle(e)}
                    className="social-appIcons"
                    // title="Sign In with Google account"
                  >
                    <div className="social-appIcon-image">
                      <GoogleIcon />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="signin-form__register-link">
            <span>
              Don't have an account? <Link to="/signup">Create one.</Link>
            </span>
          </div>
          <div className="signin-form__footer padding_top32" />
          <div className="signin-form__footer-spacer margin_top20" />
        </div>
      </div>
    </SignInContainer>
  );
}

export default SignIn;
