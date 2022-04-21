#!/bin/sh

# 若指令传回值不等于0，则立即退出shell。
set -e

# 打印当前路径
pwd

remote=$(git config remote.origin.url)

echo "remote is:" $remote

# 新建一个发布目录
mkdir -pv val-design-doc

cd val-design-doc

# 设置一个新的仓库
git config --global user.email "$V_EMAIL" >/dev/null 2>&1
# 设置发布的用户名和邮箱
git config --global user.name "$V_NAME" >/dev/null 2>&1

git init

git remote add --fetch origin "$remote"

echo "email is: "$V_EMAIL
echo "name is: "$V_NAME
echo "sitesource is: "$V_DIST

# 切换gh-page分支
if git rev-parse --verify origin/gh-pages >/dev/null 2>$1; then
  git checkout gh-pages
  # 删除掉旧的文件内容
  git rm -rf .
else
  git checkout --orphan gh-pages
fi

# 把构建好的文件目录拷贝进来
cp -a "../${V_DIST}/." .

rm -rf favicon.ico

cp "../favicon.ico" . 

ls -la

# 把所有文件添加到git
git add -A
# 添加第一条提交内容
git commit --allow-empty -m "Deploy to Githun pages [ci skip]"

# 推送文件
git push --force --quiet origin gh-pages

# 资源回收，删除临时分支与目录
cd ..
rm -rf val-design-doc

echo "Finished Deployment!"
