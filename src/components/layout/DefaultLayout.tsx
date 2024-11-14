import { SideBar } from '../SideBar';
import { Outlet } from 'react-router';
import { Container } from '../../ui/Container';
import { MobileBottom } from '../MobileBottom';
import { BiCube } from 'react-icons/bi';
import IconBackground from '../../ui/background/IconBackground.tsx';
import { BsCompass, BsFillStarFill, BsMap } from 'react-icons/bs';
import { TbDiamondFilled } from 'react-icons/tb';
import { LuCoffee } from 'react-icons/lu';
import { GiBattleAxe, GiSpiderWeb } from 'react-icons/gi';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { LoginWithAccessToken } from '../../features/api/auth.ts';
import { setIsAuthenticated } from '../../features/redux/user/userSlice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/redux/store.ts';
import { useNavigate } from 'react-router-dom';
import CustomTypedAlert from '../../ui/alerts/CustomTypedAlert.tsx';

export const DefaultLayout = () => {
  const [accessToken] = useState(Cookies.get('accessToken'));
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [alertType, setAlertType] = useState('info');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const mutation = useMutation<ApiResponse<LoginResponseData>, Error, string>({
    mutationFn: async () => {
      return await LoginWithAccessToken(accessToken);
    },
    onSuccess: (data: ApiResponse<LoginResponseData>) => {
      Cookies.set('accessToken', data.data.token.access_token, { expires: data.data.token.expires_in });
      dispatch(setIsAuthenticated(true));

      setShowAlert(true);
      setAlertType('info');
      setAlertTitle('Авторизация');
      setAlertText('Вы успешно вошли в свой аккаунт');
    },
    onError: () => {
      Cookies.remove('accessToken');
      navigate('/dashboard/home');

      setShowAlert(true);
      setAlertType('error');
      setAlertTitle('Время сессии истекло');
      setAlertText('Ваше время сессии истекло. Пожалуйста, повторите вход в свой аккаунт');
    }
  });

  useEffect(() => {
    if (accessToken != undefined && accessToken != '') {
      mutation.mutate(accessToken);
    } else {
      navigate('/dashboard/home');
    }
  }, [mutation.mutate]);

  return (
    <div className="">
      <CustomTypedAlert alertText={alertText} alertTitle={alertTitle} alertType={alertType} isVisible={showAlert} setIsVisible={setShowAlert}></CustomTypedAlert>
      <IconBackground
        icons={[BsCompass, BsMap, TbDiamondFilled, LuCoffee, GiSpiderWeb, GiBattleAxe, BsFillStarFill, BiCube]}
        iconSize={24} iconOpacity={0.05} />
      <SideBar>
      </SideBar>
      <div className="md:ml-64 h-[100vh]">
        <Container>
          <Outlet />
        </Container>

        <MobileBottom />
      </div>
    </div>
  );
};