import React, { useEffect } from 'react';

const VKLogin: React.FC = () => {

  useEffect(() => {
    // Проверка загрузки VKIDSDK и инициализация
    if ('VKIDSDK' in window) {
      const vkId = window.VKIDSDK;

      // @ts-ignore
      vkId.Config.init({
        app: 52668174, // Замените на ваш VK API ID
        redirectUrl: 'https://flowbite.com/docs/forms/toggle/', // Замените на ваш редирект URL
        // @ts-ignore
        responseMode: vkId.ConfigResponseMode.Callback,
        // @ts-ignore
        source: vkId.ConfigSource.LOWCODE,
      });

      // @ts-ignore
      const oneTap = new vkId.OneTap();

      const container = document.getElementById('vk-one-tap');
      if (container && container.childElementCount === 0) { // Проверка, пустой ли контейнер
        oneTap.render({
          container: container,
          showAlternativeLogin: true,
          styles: {
            height: 36,
            width: '70%',
          }
        })
          // @ts-ignore
          .on(vkId.WidgetEvents.ERROR, vkidOnError)
          // @ts-ignore
          .on(vkId.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: any) {
            const code = payload.code;
            const deviceId = payload.device_id;

            // @ts-ignore
            vkId.Auth.exchangeCode(code, deviceId)
              .then(vkidOnSuccess)
              .catch(vkidOnError);
          });

        function vkidOnSuccess(data: any) {
          console.log("Login successful", data);
          // Обработка успешного входа
          // Можно отправить данные на ваш бэкенд для дальнейшей обработки
        }

        function vkidOnError(error: any) {
          console.error("Login error", error);
          // Обработка ошибки
        }
      }
    } else {
      console.error("VK ID SDK not loaded");
    }
  }, []);

  return (
    <div>
      <div id="vk-one-tap" className=''></div>
    </div>
  );
};

export default VKLogin;
