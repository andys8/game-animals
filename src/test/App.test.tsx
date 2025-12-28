import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from '../App';

// Mock SpeechSynthesis
const mockSpeak = vi.fn();
const mockCancel = vi.fn();

vi.stubGlobal('speechSynthesis', {
  speak: mockSpeak,
  cancel: mockCancel,
  getVoices: () => [],
  pause: vi.fn(),
  resume: vi.fn(),
  pending: false,
  speaking: false,
  paused: false,
  onvoiceschanged: null,
});

vi.stubGlobal('SpeechSynthesisUtterance', vi.fn().mockImplementation((text) => ({
  text,
  lang: 'en-US',
  rate: 1,
  pitch: 1,
  volume: 1,
  voice: null,
  onstart: null,
  onend: null,
  onerror: null,
  onpause: null,
  onresume: null,
  onmark: null,
  onboundary: null,
})));

test('renders tap the animals instruction', () => {
  render(<App />);
  expect(screen.getByText(/Cat/i)).toBeInTheDocument();
});