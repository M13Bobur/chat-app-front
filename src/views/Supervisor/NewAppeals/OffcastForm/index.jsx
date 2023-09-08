import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { Box, Card, Form } from './style';
const { TextArea } = Input;

export default ({ close, submitForm, id }) => {
  const [description, setDescription] = useState('');
  return (
    <Box>
      <Card>
        <Form>
          <div
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <h3>Изоҳ</h3>
            <TextArea
              autoSize={{
                minRows: 6,
                maxRows: 10,
              }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              defaultValue={description}
              placeholder='Please write your answer...'
            />
          </div>
        </Form>
        <div className='footer__buttons'>
          <Button
            onClick={close}
            size='large'
            className='footer__button'
            danger
          >
            Бекор қилиш
          </Button>
          <Button
            onClick={() => submitForm(id, description)}
            size='large'
            disabled={!description.length > 0 && true}
            className='footer__button'
          >
            Сақлаш
          </Button>
        </div>
      </Card>
    </Box>
  );
};
