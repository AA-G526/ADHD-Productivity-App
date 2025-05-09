import { Clock, Hourglass, CheckCircle, Target } from 'lucide-react';

export default function Stats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center outline-2 p-4 rounded-lg mb-6">
            <div>
                <Clock className="mx-auto mb-1" />
                <p className="font-bold text-lg">128</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sessions</p>
            </div>
            <div>
                <Hourglass className="mx-auto mb-1" />
                <p className="font-bold text-lg">53h 20m</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Focus Time</p>
            </div>
          <div>
            <CheckCircle className="mx-auto mb-1" />
            <p className="font-bold text-lg">42</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tasks</p>
          </div>
          <div>
            <Target className="mx-auto mb-1" />
            <p className="font-bold text-lg">15</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Goals</p>
          </div>
        </div>
  )
}