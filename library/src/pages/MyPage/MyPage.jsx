/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from "react-query";
import * as s from "./style"
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";

function MyPage() {

    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailMutation",
        mutationFn: sendAuthMailRequest,
        retry: 0
    });

    const handleSendAuthMailClick = () => {
        sendAuthMailMutation.mutate();
    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.imgBox}>
                    <div css={s.profileImg}>
                        <img src="" alt="" />
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoText}>사용자이름: {principalData.data.username}</div>
                    <div css={s.infoText}>이름: {principalData.data.name}</div>
                    <div css={s.emailBox}>  
                        <div css={s.infoText}>이메일: {principalData.data.email}</div>
                        {
                            principalData.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0
                            ? <button css={s.infoButton} onClick={handleSendAuthMailClick}>인증하기</button>
                            : <>체크</>
                            
                        }
                    </div>
                    <div>
                        <button>정보 수정</button>
                        <button>비밀번호 수정</button>
                    </div>
                </div>
            </div>
            <div css={s.bottom}>

            </div>
        </div>
    );
}

export default MyPage;