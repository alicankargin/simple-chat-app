import React from 'react';
import { ChatComponent } from './Chat';
import { mount } from 'enzyme';
import { LoginForm } from '../components/LoginForm';
import { Messages } from '../components/Messages';
import { MessageForm } from '../components/MessageForm';

const mockFunction = jest.fn();

describe('ChatComponent', () => {
  describe('when not connected', () => {
    it('should render LoginForm', () => {
      const wrapper = mount(
        <ChatComponent
          connected={false}
          connectRequested={mockFunction}
          messages={[]}
          messageGetAll={mockFunction}
          messageSend={mockFunction}
          username={'mockUsername'}
        />,
      );
      expect(wrapper.find(LoginForm)).toBeTruthy();
    });
  });

  describe('when connected', () => {
    it('should render Messages and MessageForm components', () => {
      const wrapper = mount(
        <ChatComponent
          connected
          connectRequested={mockFunction}
          messages={[]}
          messageGetAll={mockFunction}
          messageSend={mockFunction}
          username={'mockUsername'}
        />,
      );
      expect(wrapper.find(Messages)).toHaveLength(1);
      expect(wrapper.find(MessageForm)).toHaveLength(1);
    });
  });
});
