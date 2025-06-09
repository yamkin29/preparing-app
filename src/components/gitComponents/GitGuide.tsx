import React from 'react';

export const GitGuide: React.FC = () => (
  <div className="space-y-8">
    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">1. Добавление изменений: git add и git commit</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git add</b> — добавляет изменения в индекс (staging area), подготавливая их к коммиту.<br/>
          <b>git commit</b> — сохраняет изменения из индекса в локальный репозиторий.
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git add file.txt      # добавить конкретный файл
git add .             # добавить все изменения

git commit -m "Сообщение коммита"`}
        </pre>
        <p className="text-gray-600">Рекомендуется писать осмысленные сообщения к коммитам.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">2. Пуш изменений: git push</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git push</b> — отправляет ваши коммиты из локального репозитория в удалённый (например, на GitHub).
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git push origin main      # отправить ветку main
# Если ветка новая:
git push -u origin feature-branch`}
        </pre>
        <p className="text-gray-600">Параметр <b>-u</b> связывает локальную ветку с удалённой.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">3. Получение изменений из ветки: git merge и git rebase</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git merge</b> — объединяет изменения из одной ветки в другую, создавая дополнительный коммит слияния (merge commit).<br/>
          <b>git rebase</b> — переносит ваши коммиты поверх другой ветки, делая историю более линейной, без merge-коммитов.
        </p>
        <div className="mb-2">
          <b className="block mb-1">Пример использования merge:</b>
          <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git checkout main
# Слить ветку feature в main:
git merge feature
# История:
# A---B---C---D (main)
#      \     /
#       E---F (feature)
# После merge: появляется merge-коммит`}
          </pre>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Пример использования rebase:</b>
          <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git checkout feature
git rebase main
# История:
# A---B---C---D (main)
#              \
#               E'--F' (feature, переписанные коммиты)
# После rebase: история линейная, без merge-коммита`}
          </pre>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Когда использовать merge:</b>
          <ul className="list-disc list-inside text-gray-600">
            <li>Когда важно сохранить полную историю ветвлений и слияний</li>
            <li>В командной работе, чтобы видеть, когда и какие ветки сливались</li>
          </ul>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Когда использовать rebase:</b>
          <ul className="list-disc list-inside text-gray-600">
            <li>Для линейной истории (например, перед пушем в main)</li>
            <li>Для "освежения" своей ветки последними изменениями из основной ветки</li>
            <li>Перед pull request, чтобы избежать merge-коммитов</li>
          </ul>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Плюсы и минусы:</b>
          <ul className="list-disc list-inside text-gray-600">
            <li><b>merge:</b> + сохраняет историю, - история может быть запутанной</li>
            <li><b>rebase:</b> + чистая история, - переписывает коммиты (осторожно при работе в команде!)</li>
          </ul>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Конфликты при merge и rebase:</b>
          <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`# Если возник конфликт:
# 1. Откройте файл с конфликтом, исправьте вручную
# 2. Для merge:
git add <file>
git commit            # завершить merge
# 3. Для rebase:
git add <file>
git rebase --continue # продолжить rebase
# Если нужно отменить rebase:
git rebase --abort`}
          </pre>
        </div>
        <div className="mb-2">
          <b className="block mb-1">Важные замечания:</b>
          <ul className="list-disc list-inside text-gray-600">
            <li>Не используйте rebase для публичных веток, если по ним уже работают другие разработчики</li>
            <li>Перед rebase всегда делайте backup или работайте в отдельной ветке</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">4. Берем изменения из другой ветки: git cherry-pick</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git cherry-pick</b> — позволяет взять отдельный коммит из одной ветки и применить его в другой.
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git checkout main
git cherry-pick <commit-hash>`}
        </pre>
        <p className="text-gray-600">Используйте для переноса конкретных изменений.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">5. Удаляем текущие изменения: git reset</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git reset</b> — отменяет изменения в индексе и/или рабочей директории.
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git reset HEAD file.txt      # убрать файл из индекса

git reset --hard             # сбросить все изменения (ОСТОРОЖНО!)`}
        </pre>
        <p className="text-gray-600">Флаг <b>--hard</b> удаляет все незафиксированные изменения безвозвратно.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">6. Создание/переключение ветки: git checkout, флаг -b</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>git checkout -b</b> — создаёт новую ветку и сразу переключается на неё.<br/>
          <b>git checkout branch</b> — просто переключает на существующую ветку.
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git checkout -b feature-branch   # создать и перейти

git checkout main                 # перейти на main`}
        </pre>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">7. Флаг —no-verify</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>--no-verify</b> — отключает выполнение хуков (например, pre-commit) при выполнении команд <b>commit</b> или <b>push</b>.
        </p>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git commit -m "fix" --no-verify
git push --no-verify`}
        </pre>
        <p className="text-gray-600">Используйте только если уверены, что пропускать проверки безопасно.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">8. Конфиги гита: локальные и глобальные</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          Git хранит настройки в двух основных местах:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li><b>Глобальные</b> — для всех репозиториев пользователя (~/.gitconfig)</li>
          <li><b>Локальные</b> — только для текущего репозитория (.git/config)</li>
        </ul>
        <pre className="text-sm bg-gray-100 p-2 rounded mb-2">
{`git config --global user.name "Имя"
git config --global user.email "email@example.com"

git config user.name "Имя"      # только для текущего репозитория`}
        </pre>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">9. Что такое GitHub, GitLab, BitBucket</h4>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          <b>GitHub</b>, <b>GitLab</b> и <b>BitBucket</b> — это популярные сервисы для хранения git-репозиториев в облаке, совместной работы и CI/CD.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li><b>GitHub</b> — самый популярный, огромная экосистема, бесплатные публичные репозитории.</li>
          <li><b>GitLab</b> — поддержка приватных репозиториев, встроенный CI/CD.</li>
          <li><b>BitBucket</b> — интеграция с Jira, бесплатные приватные репозитории для небольших команд.</li>
        </ul>
        <p className="text-gray-600">Все эти сервисы позволяют работать с git-репозиториями через веб-интерфейс и интегрируются с инструментами командной разработки.</p>
      </div>
    </section>
  </div>
); 